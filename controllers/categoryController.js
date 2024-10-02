const CategoryModel = require('../models/categoryModel');

//Get Category API - /api/v1/category
exports.getCategory = async (req, res, next) => {
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{};      
       // sort in ascending (1) order by length
       const sort = { length: 1, title:1 };
    const category = await CategoryModel.find(query).sort(sort);
    res.json({
        success: true,
        category
    })
}