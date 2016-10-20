const Itinerary = require('../db/itinerary');
const PricingOptions = require('./pricingOptions');

const itinerary = (itineraryO, fileName) => {
  //create segmentsLegs with LegId
  return Itinerary.createItinerary({
    OutboundLegId: itineraryO.OutboundLegId,
    InboundLegId: itineraryO.InboundLegId,
    FileName: fileName
  })
    .then((res) => {
      return PricingOptions(res.dataValues.Id, itineraryO.PricingOptions)
    })
    .catch((error) => {
      console.log('itineraryO: ' + error);
    });
};

module.exports = itinerary;
