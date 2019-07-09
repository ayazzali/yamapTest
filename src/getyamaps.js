import ymaps from 'ymaps';

async function getYaMap() {
    return await ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=a0a57de0-d60a-4003-8a00-ba94bc04bc2f')
}

export default getYaMap
