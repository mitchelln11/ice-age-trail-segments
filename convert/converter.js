const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const parser = new xml2js.Parser({
    explicitArray: true,
    tagNameProcessors: [xml2js.processors.stripPrefix] // Remove 'gx:' prefix, will search for 'coord' later
});

const filePath = path.join(__dirname, 'Aug_3,_2025_6_45_39_PM.kml');

fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    parser.parseString(data, (err, result) => {
        if (err) throw err;

        const placemarks = findAllKeys(result, 'coord'); // because we removed the 'gx:' prefix

        console.log(placemarks) // All we are doing is logging the coordinates to the console. You can copy and paste as need to `map.js` file
    });
})

function findAllKeys(obj, keyToFind) {
    let results = [];

    function recursiveSearch(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return;
        }

        for (let key in obj) {
            if (key === keyToFind) {
                const coords = obj[key];
                const parsedCoords = [];

                coords.forEach(coordStr => {
                    // Separating into arrays, '-87.99199046 43.82073357 244' (longitude, latitude, altitude)
                    const [lon, lat] = coordStr.split(' ');

                    // Split based on period
                    const [lonDeg, lonMinutes] = lon.split('.')
                    const [latDeg, latMinutes] = lat.split('.')
                    parsedCoords.push({
                        // Slice the minutes to 6 decimal places
                        lat: `${latDeg}.${latMinutes.slice(0,6)}`, lng: `${lonDeg}.${lonMinutes.slice(0,6)}`,
                    })
                })
                results.push(parsedCoords);
            } else {
                recursiveSearch(obj[key]);
            }
        }
    }

    recursiveSearch(obj);
    // console.log('Break');
    // console.log(results);
    return results
}