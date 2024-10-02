const express = require('express');
const router = express.Router();
const {createOrder,getSingleOrder} = require('../controllers/orderController');

router.route('/order').post(createOrder);
router.route('/order/:id').get(getSingleOrder);

module.exports = router;
