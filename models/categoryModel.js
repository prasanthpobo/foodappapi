const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: Number,
    title: String,
    image_Url: String,
});

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;