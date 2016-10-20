const FlightNumber = require('../db/flightNumber');

const FlightNumbers = (LegId, flightNumbers) => {
  return new Promise((resolve, reject) => {
    FlightNumber.createFlightNumbers(
      flightNumbers.map((flightNumber) => {
        return {
          FlightNumber: flightNumber.FlightNumber,
          CarrierId: flightNumber.CarrierId,
          LegId: LegId
        };
      })
    )
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject('FlightNumbers: ' + error);
      });
  });
};

module.exports = FlightNumbers;
