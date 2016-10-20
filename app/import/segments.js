const Segment = require('../db/Segment');

const segments = (Segments) => {
  return new Promise((resolve, reject) => {
    Segment
      .createSegments(Segments)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject('segments' + error);
      });
  });
};

module.exports = segments;
