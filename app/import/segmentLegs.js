const SegmentLeg = require('../db/segmentLeg');

const segmentLegs = (legId, segments) => {
  return new Promise((resolve, reject) => {
    SegmentLeg.createSegmentLegs(
      segments.map((segmentId) => {
        return {LegId: legId, SegmentId: segmentId};
      })
    )
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject('segmentLegs' + error);
      });
  });
};

module.exports = segmentLegs;
