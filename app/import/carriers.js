'use strict';

const Carrier = require('../db/carrier');

const carriers = (Carriers) => {
  return new Promise((resolve, reject) => {
    Carrier
      .createCarriers(Carriers)
      .then((res) => {
        resolve(res);
      }).catch((error) => {
      reject(error);
    });
    resolve();
  });
}

module.exports = carriers;
