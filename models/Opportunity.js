const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OpportunitySchema = new Schema({
  profileName: { type: String, required: true },
  companyName: { type: String, required: true },
  stipend: { type: Object, required: true },
  location: { type: Array, required: true },
  duration: { type: String, required: true },
  startDate: { type: String, required: true },
});

module.exports = mongoose.model("Opportunity", OpportunitySchema);
