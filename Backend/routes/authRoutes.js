const express = require('express');
const { registerController, loginController, testController , createPaymentIntent } = require('../controller/authController');
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

//router object
const router = express.Router();

//routing
//Regestring || Methos POST
router.post('/register', registerController);

//Login || Method POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

//protected user routes
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected Admin routes
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

// Create Payment Intent Route
router.post('/create-payment-intent', requireSignIn, createPaymentIntent);


module.exports = router;
