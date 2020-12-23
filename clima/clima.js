const axios = require('axios')

const getClima = async(lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=555bc907c37609d522ea01d9940d5d3b&units=metric`)

    return resp.data.main.temp;

}

module.exports ={
    getClima
}