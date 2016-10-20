const Itinerary = require('./itinerary');

const itineraires = (ItinerariesA, fileName) => {
  return new Promise((resolve, reject) => {
    Promise.all(
      ItinerariesA.map((itinerary) => {
        return Itinerary(itinerary, fileName)
      })
    )
      .then((res) => {
        console.log('File: ' + fileName);
        resolve(res);
      })
      .catch((error) => {
        reject('itineraires: ' + error);
      });
  });
};

module.exports = itineraires;
