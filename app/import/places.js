'use strict';

const Place = require('../db/place');

const places = (Places) => {
  return new Promise((resolve, reject) => {
    Places.forEach((place) => {
      Place.createPlace({
        Id: place.Id,
        ParentId: place.ParentId,
        Code: place.Code,
        Type: place.Type,
        Name:place.Name
      }).then((res) => {
      }).catch((error) => {
        reject(error);
      });
      resolve();

    });
  });
};

module.exports = places;
