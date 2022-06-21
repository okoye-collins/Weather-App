// API Key: fH6Lhj1o5gGY5jrl7cDI6faQGgufSENz

const key = 'fH6Lhj1o5gGY5jrl7cDI6faQGgufSENz';
const queryText = document.querySelector('.change-location');

// Get weather Infornation
const getWeather = async(cityKey) =>{
    const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}`;
    const response = await fetch(url + query);
    const data = await  response.json();

    return data[0];
}

// get City information
const getCity = async(city) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(url + query);
    
    if(response.status !== 200){
        throw new Error('could not fetch data');
    }
    const data = await response.json();

    return data[0];   
}

// getCity('awka')
//     // return back a promise(they city data) so as to get the Key
//     .then(data => {
//         return getWeather(data.Key)
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// getWeather("251993")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))