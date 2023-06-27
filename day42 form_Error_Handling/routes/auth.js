const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();
const {check , body} = require('express-validator');
const User = require('../models/user');


//login----------
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);


// //signup--------------
router.get('/signup', authController.getSignup);
router.post('/signup',
    check('email')
        .isEmail()
        .withMessage('Enter a valid email.')
        .custom((value, { req })=> {
            // if (value === 'test@test.com') {
            //     throw new Error('This email address if forbidden.');
            // } 
            // return true;
            return User.findOne({ email: value })
            .then(userDoc => {
                if(userDoc){
                    return Promise.reject('E-Mail exists already, pick different one.')
                }
            })
    }),
    body(
        'password',
        'Enter a password with only numbers and text and at least 5 characters.')
        .isLength({ min: 5 })
        .isAlphanumeric(),
    body(
        'confirmPassword'
    ).custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Passwords have to match.');
        }
        return true;
    }),
    authController.postSignup
);
//logout-----------
router.post('/logout', authController.postLogout);

//reset-----------
router.get('/reset', authController.getReset);
router.post('/reset', authController.postReset);

//new-password----
router.get('/reset/:token', authController.getNewPassword);
router.post('/new-password', authController.postNewPassword);
module.exports = router;