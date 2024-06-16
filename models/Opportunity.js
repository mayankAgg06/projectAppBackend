const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpportunitySchema = new Schema({
  profileName: { type: String, required: true },
  companyName: { type: String, required: true },
  stipend: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, required: true },
  startDate: { type: String, required: true },
});

module.exports = mongoose.model("Opportunity", OpportunitySchema);
