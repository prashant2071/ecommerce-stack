const express = require('express');
const { getAllProducts } = require('../Controller/productController');
const router=express.Router();


router.route ("/").get(getAllProducts)
module.exports=router;