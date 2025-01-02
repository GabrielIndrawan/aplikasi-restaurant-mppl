const express = require('express');
const { checklistOrder, markMenuUnavailable } = require('../utils/kitchenHandlers');
const router = express.Router();

// Checklist pesanan
router.post('/checklist', checklistOrder);

// Tandai menu habis
router.post('/menu/unavailable', markMenuUnavailable);

module.exports = router;