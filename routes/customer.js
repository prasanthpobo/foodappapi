const express = require('express');
const { getCustomers, getSingleCustomer } = require('../controllers/customerController');
const router = express.Router();

router.route('/customers').get(getCustomers);
router.route('/customer/:id').get(getSingleCustomer);

module.exports = router;