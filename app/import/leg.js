const Leg = require('../db/leg');
const SegmentLegs = require('./segmentLegs');
const FlightNumbers = require('./flightNumbers');

const leg = (legO) => {
  //create segmentsLegs with LegId
  return SegmentLegs(legO.Id, legO.SegmentIds)
    .then(() => {
      //create flightNumbers with LegId
      return FlightNumbers(legO.Id, legO.FlightNumbers)
    }).then(() => {

      legO.Stops = legO.Stops[0];
      legO.Carriers = legO.Carriers.toString();
      legO.OperatingCarriers = legO.OperatingCarriers.toString();

      return Leg.createLeg(legO);
    })
    .catch((error) => {
      console.log('legO ' + error);
    })
};

module.exports = leg;
