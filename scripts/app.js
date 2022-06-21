const cityForm = document.querySelector('.change-location');
const cards = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')


// update UI

const updateUi = (data) =>{
    console.log(data)
    const cityDes = data.cityDes;
    const weather = data.weather;

    // update Detail template
    details.innerHTML = `
        <h5>${cityDes.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    // update Image and Icon

    let timeScr = null;
    if(weather.IsDayTime){
        timeScr = './img/day.jpg';
    }else{
        timeScr = './img/night.jpeg';
    }

    time.setAttribute('src', timeScr)

    // make card visible
    if(cards.classList.contains('hide-card')){
        cards.classList.remove('hide-card');    
    }
}


const updateCity = async(city) =>{
    // console.log(city)
    const cityDes = await getCity(city);
    const weather = await getWeather(cityDes.Key);

    return {
        cityDes: cityDes,
        weather: weather,
    }
}

cityForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();
    
    // Update Ui with the new city
    updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err))

});

