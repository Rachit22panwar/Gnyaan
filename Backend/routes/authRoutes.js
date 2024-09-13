const express = require('express');
const { registerController, loginController, testController } = require('../controller/authController');
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

//router object
const router = express.Router();

//routing
// Register || Method POST
router.post('/register', registerController);

// Login || Method POST
router.post('/login', loginController);

// User authentication check route || Method GET
router.get('/user-auth', requireSignIn, (req, res) => {
    // If the user is signed in, respond with success
    res.status(200).json({ success: true });
});

// Test routes
router.get('/test', requireSignIn, isAdmin, testController);

module.exports = router;
