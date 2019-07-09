import getYaMap from './getyamaps';

async function initYaMap() {

  const shopForm = {
    searchInput: document.getElementById("search"),

    SetLatLng: (latlng) => {
      document.getElementById("shop-lat").textContent = latlng[0]
      document.getElementById("shop-lng").textContent = latlng[1]
    },
  }




  const ymaps = await getYaMap();
  console.log("ymaps=", ymaps);

  const map = new ymaps.Map('map', {
    center: [-8.369326, 115.166023],
    zoom: 12,
    controls: []
  });


  var mycity = 'казань'
  let res = await ymaps.geocode(mycity)
  try {
    var f = res.geoObjects.get(0).geometry.getCoordinates()
    console.log(mycity + 'mycity was found', f);
    console.log(res.geoObjects);
    map.setCenter(f);
  }
  catch (e) { console.warn("catch error ", e); }

  var searchControl = new ymaps.control.SearchControl({
    options: {
      provider: 'yandex#search'
    }
  });
  map.controls.add(searchControl);
  // searchControl.search('Шоколадница');
  searchControl.events.add('resultselect', function (e) {
    var index = e.get('index');
    searchControl.getResult(index).then(function (res) {
      var latlng = res.geometry.getCoordinates()
      console.info('получаем координаты найденной точки по поиску', latlng);
      shopForm.SetLatLng(latlng)
    });
  })



  shopForm.searchInput.onkeyup = async function () {
    searchControl.search(this.value);
  }





  var myPlacemark;

  // Слушаем клик на карте.
  map.events.add('click', function (e) {
    var coords = e.get('coords'); console.log('click to map', coords);
    shopForm.SetLatLng(coords)

    // Если метка уже создана – просто передвигаем ее.
    if (myPlacemark) {
      myPlacemark.geometry.setCoordinates(coords);
    }
    // Если нет – создаем.
    else {
      myPlacemark = createPlacemark(coords);
      map.geoObjects.add(myPlacemark);
      // Слушаем событие окончания перетаскивания на метке.
      myPlacemark.events.add('dragend', function () {
        getAddress(myPlacemark.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  });

  // Создание метки.
  function createPlacemark(coords) {
    return new ymaps.Placemark(coords, {
      iconCaption: 'поиск...'
    }, {
        preset: 'islands#violetDotIconWithCaption',
        draggable: true
      });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(coords) {
    myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then(function (res) {
      var firstGeoObject = res.geoObjects.get(0);

      myPlacemark.properties
        .set({
          // Формируем строку с данными об объекте.
          iconCaption: [
            // Название населенного пункта или вышестоящее административно-территориальное образование.
            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
          ].filter(Boolean).join(', '),
          // В качестве контента балуна задаем строку с адресом объекта.
          balloonContent: firstGeoObject.getAddressLine()
        });
    });
  }

}

export default initYaMap
  // document.getElementById("search").onkeyup = async function () {
  //   var res = await ymaps.geocode(this.value, { results: 6 })
  //   console.log(res);
  //   res.geoObjects.toArray().map(_ => {
  //     let option = document.createElement("p")
  //     option.innerHTML = _.getAddressLine()
  //     document.getElementById("search-res").append(option)
  //   })
  // }