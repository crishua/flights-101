const Itinerary = require('../db/itinerary');
const PricingOptions = require('./pricingOptions');

const itinerary = (itineraryO) => {
  //create segmentsLegs with LegId
  return Itinerary.createItinerary(itineraryO)
    .then((res) => {
      return PricingOptions(res.dataValues.Id, itineraryO.PricingOptions)
    })
    .catch((error) => {
      console.log('itineraryO: ' + error);
    });
};

module.exports = itinerary;
