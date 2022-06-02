const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
let divClima = document.getElementById('divClima')

fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Mendozaaaaaaaaa","Argentina"&limit=1&appid=${API_KEY}`)
.then(response => response.json())
.then(data => {
    
    let {lat, lon, name, state} = data[0]

    console.log(lat)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(({main, weather})=>  {
        let {description} = weather[0]
        console.log(weather)
        let {temp, humidity, pressure, feels_like} = main
        divClima.innerHTML = `
            <p>Ciudad: ${name} </p>
            <p>State: ${state} </p>
            <p>Temperatura: ${temp} °C</p>
            <p>Sensacion Termica: ${feels_like} °C</p>
            <p>Humedad: ${humidity} %</p>
            <p>Presion: ${pressure} hPa</p>
            <p>Tiempo: ${description}</p>
        `      
    })
})
.catch(error => console.error(error))