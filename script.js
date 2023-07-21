const baseURL = 'http://api.weatherapi.com/v1';
const APIkey = '0c564310771b4d6b8d7145214232107';

async function getWeatherData(location, option='current.json') {
    let response = await fetch(`${baseURL}/${option}?key=${APIkey}&q=${location}`);
    let Data = await response.json();
    console.log(Data);
}
