const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);
    console.log(encodeUrl)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': 'b8f5334184msh73b21656fd099a6p13e18bjsn49aee01c93ab' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error ('No hay resultados para ', dir)
    }

    const data = esp.data.Results[0];
    const direccion = data.name;
    const latitud = data.latitud;
    const longitud = data.longitud;
        
    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}

