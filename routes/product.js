const express = require('express');
const { getProducts,getAllProducts, getSingleProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/allproducts/:id').get(getAllProducts);
// router.route('/product/:id').get(getSingleProduct);

module.exports = router;