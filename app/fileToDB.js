const fs = require('fs');
const Itinerary = require('./db/itinerary');
const Agent = require('./db/agent');
const PricingOption = require('./db/pricingOption');

//load file

fs.readFile(__dirname + '/' + process.argv[2], 'utf8', (err, data) => {
  if (err) {
    throw new Error(err);
  }
  //decode JSON
  const json = data.toJSON();

  //from object create agent
  json.Agents.map((agent) => {
    Agent.createAgent(agent)
  });
  //from object create itinerary
  json.Itineraries.map((itinerary) => {
    const iti = Itinerary.createItinerary({
      OutboundLegId: itinerary.OutboundLegId,
      InboundLegId: itinerary.InboundLegId
    });
    PricingOption.createOption({
      Agent: iti.Agents[0] || null,
      QuoteAgeInMinutes: iti.QuoteAgeInMinutes || null,
      Price: iti.Price || null,
      DeeplinkUrl: iti.DeeplinkUrl || null
    });
  });
  //when creating itinerary, create pricingOption

});

