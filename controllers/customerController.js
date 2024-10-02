const customerModel = require('../models/customerModel');

//Get Customer API - /api/v1/customer
exports.getCustomers = async (req, res, next) => {
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}
    const products = await customerModel.find(query);
    res.json({
        success: true,
        products
    })
}

//Get Single Product API - /api/v1/product/:id
exports.getSingleCustomer = async (req, res, next) => {
    try {
        const customer = await customerModel.findById(req.params.id);
        res.json({
            success: true,
            customer
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Customer with that ID'
        })
    }
}