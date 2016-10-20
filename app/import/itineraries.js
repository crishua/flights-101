const Itinerary = require('./itinerary');

const itineraires = (ItinerariesA) => {
  return new Promise((resolve, reject) => {
    Promise.all(
      ItinerariesA.map((itinerary) => {
        return Itinerary(itinerary)
      })
    )
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject('itineraires: ' + error);
      });
  });
};

module.exports = itineraires;
