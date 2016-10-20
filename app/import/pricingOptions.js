const PricingOption = require('../db/pricingOption');

const pricingOptions = (itineraryId, pricingOptionsA) => {
  return new Promise((resolve, reject) => {
    PricingOption.createPricingOptions(
      pricingOptionsA.map((pricingOption) => {
        return {
          AgentId: pricingOption.AgentId,
          QuoteAgeInMinutes: pricingOption.QuoteAgeInMinutes,
          Price: pricingOption.Price,
          itineraryId: pricingOption.itineraryId
        };
      })
    )
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

module.exports = pricingOptions;
