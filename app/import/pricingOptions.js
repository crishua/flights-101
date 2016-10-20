const PricingOption = require('../db/pricingOption');

const pricingOptions = (itineraryId, pricingOptionsA) => {
  return PricingOption.createPricingOptions(
    pricingOptionsA.map((pricingOption) => {
      return {
        AgentId: pricingOption.Agents[0],
        QuoteAgeInMinutes: pricingOption.QuoteAgeInMinutes,
        Price: pricingOption.Price,
        ItineraryId: itineraryId
      };
    })
  )
    .catch((error) => {
      console.log('PricingOption: ' + error);
    });
};

module.exports = pricingOptions;
