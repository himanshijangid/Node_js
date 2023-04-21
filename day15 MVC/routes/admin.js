const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')

//const products = []

router.get('/add-product', productsController.getAddProduct);




router.post('/add-product', productsController.PostAddProduct);


exports.routes = router;
//exports.products = products;