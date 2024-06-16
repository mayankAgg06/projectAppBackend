const Opportunity = require('../models/Opportunity');
const User = require('../models/User');

exports.getOpportunities = async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.json(opportunities);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.applyForOpportunity = async (req, res) => {
  try {
    const opportunityId = req.params.id;
    const user = await User.findById(req.user.id);
    if (user.appliedOpportunities.includes(opportunityId)) {
      return res.status(400).json({ msg: 'Already applied for this opportunity' });
    }
    user.appliedOpportunities.push(opportunityId);
    await user.save();
    res.json({ msg: 'Successfully applied for the opportunity' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
