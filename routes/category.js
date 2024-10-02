const express = require('express');
const { getCategory } = require('../controllers/categoryController');
const router = express.Router();

router.route('/category').get(getCategory);
// router.route('/category/:id').get(getSingleCategory);

module.exports = router;