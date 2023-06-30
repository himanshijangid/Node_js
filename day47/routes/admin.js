const path = require('path');

const express = require('express');
const { body } = require('express-validator');
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// // /admin/add-product => GET
router.get('/add-product',isAuth, adminController.getAddProduct);

// // /admin/products => GET
router.get('/products',isAuth, adminController.getProducts);

// // /admin/add-product => POST
router.post('/add-product',
[
    body('title')
    .isString()
    .withMessage('Title should be string value')
    .isLength({ min: 3 })
    .trim(),
    body('imageUrl').isURL()
    .withMessage('Enter a valid Url'),
    body('price').isFloat()
    .withMessage('Price should not be Empty'),
    body('description').isLength({min:5,max:300}).trim()
    .withMessage('description should not be Empty'),
], isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', [
    body('title')
    .isString()
    .withMessage('Title should be string value')
    .isLength({ min: 5 ,max:300 })
    .trim(),
    body('imageUrl').isURL()
    .withMessage('Enter a valid Url'),
    body('price').isFloat()
    .withMessage('Price should not be Empty'),
    body('description').isLength({min:5,max:300}).trim()
    .withMessage('description should not be Empty'),
], isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
