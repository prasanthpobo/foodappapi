const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({  
    Id: Number,
    Name: String,
    Address: Array,
    MobileNumber: String,   
    EmailAddress: String,
    Password: String,
    Role: Number,
    IsActive: String,
    createdAt: Date              
});

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;