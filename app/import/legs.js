const Leg = require('./leg');

const legs = (legsA) => {
  return new Promise((resolve, reject) => {
    Promise.all(
      legsA.map((leg) => {
        return Leg(leg)
      })
    )
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error + ' in legsA');
      });
  });
};

module.exports = legs;
