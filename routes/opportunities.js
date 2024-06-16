const express = require('express');
const router = express.Router();
const { getOpportunities, applyForOpportunity } = require('../controllers/opportunityController');
const auth = require('../middleware/auth');

router.get('/', getOpportunities);
router.post('/apply/:id', auth, applyForOpportunity);

module.exports = router;
