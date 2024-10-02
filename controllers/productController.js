const ProductModel = require('../models/productModel');
const orderModel = require('../models/orderModel');

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const products = await ProductModel.find(query);
    res.json({
        success: true,
        products
    })
}

//Get Single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
}
//Get Single Product API - /api/v1/product/:id
exports.getAllProducts = async (req, res, next) => {
    try {
        // define an empty query document
        const query = {};
        // sort in ascending (1) order by length
        const sort = { length: 1, id: 1 };
        const products = await ProductModel.find(query).sort(sort);
        let order = [];
        let cartItems = [];
        if (req.params.id != "0") {
            order = await orderModel.findById(req.params.id);
            cartItems = order?.cartItems ? order.cartItems : [];
        }

        res.json({
            success: true,
            products: products,
            order: order,
            cartItems: cartItems
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}