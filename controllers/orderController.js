const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

//Create Order - /api/v1/order 
exports.createOrder = async (req, res, next) => {
    const payload = req.body;
    const cartItems = payload[0].cartItems;
    const orderId = payload[0].orderId;
    const customerId = payload[0].customerId;
    
    if (orderId !="") {
        const order = await orderModel.findById(orderId);       
        order.cartItems=cartItems;
        const status = 'Pending';
        const amount = Number(order.cartItems.reduce((acc, item) => (acc + item.price * item.value), 0)).toFixed(2);
        order.cartItems = order.cartItems;
        order.amount=amount
        order.status=status;
        order.customerId=customerId;
        await order.save();   
        res.json(
            {
                success: true,
                order
            }
        )     

    } else {
        const status = 'New';
        const amount = Number(cartItems.reduce((acc, item) => (acc + item.price * item.value), 0)).toFixed(2);
        const order = await orderModel.create({ cartItems, amount, status,customerId })
        await order.save();
        res.json(
            {
                success: true,
                order
            }
        )
    }
    //const amount = Number(cartItems.reduce((acc, item) => (acc + item.price * item.value), 0)).toFixed(2);

    // if (orderId == "") {
    //     const status = 'New';
    //     const order = await orderModel.create({ cartItems, amount, status })       
    //     await order.save();
    //     res.json(
    //         {
    //             success: true,
    //             order
    //         }
    //     )
    // } else {
    //     const status = 'pending';

    //     // Updating product stock
    //     order.cartItems.forEach(async (item)=> {
    //     const product = await productModel.findById(item.product._id);
    //     product.stock = product.stock - item.qty;
    //     await product.save();
    // })
    //     order.cartItems = cartItems;
    //     order.amount=amount
    //     order.status=status;
    //     await order.save();
    //     res.json(
    //         {
    //             success: true,
    //             order
    //         }
    //     )
    // }

}
//Get Single Product API - /api/v1/product/:id
exports.getSingleOrder = async (req, res, next) => {
    try {
        const order = await orderModel.findById(req.params.id);
        res.json({
            success: true,
            order
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Unable to get Product with that ID'
        })
    }
}
