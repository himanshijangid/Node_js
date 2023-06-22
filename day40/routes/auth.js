const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();


//login----------
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);


// //signup--------------
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

//logout-----------
router.post('/logout', authController.postLogout);


router.get('/reset', authController.getReset);
router.post('/reset', authController.postReset);

module.exports = router;