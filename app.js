const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv.direccion

//lugar.getLugarLatLng (argv.direccion)
//.then(console.log)

//clima.getClima( 40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log) //imprimimos el error

const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await coords.getClima(coords.latitud, coords.longitud)
        return 'El clima de ', coords.direccion, ' es de ', temp;
    } catch (err) {
        return 'No se pudo determinar el clima de ', coords.direccion;
    }
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);



