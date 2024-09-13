const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

// Protected Routes token base
const requireSignIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the authorization header exists
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Token missing" });
    }

    // Extract the token from the authorization header (Bearer <token>)
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Token format is invalid" });
    }

    // Verify the token
    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode; // Save decoded token info in req.user
    next(); // Proceed to the next middleware
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Invalid token or session expired" });
  }
};

// Admin access
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);

    if (!user || user.role !== true) {
      return res.status(401).send({
        success: false,
        message: 'Unauthorized Access',
      });
    }

    next(); // If the user is an admin, proceed
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: 'Error in admin middleware',
    });
  }
};

module.exports = { requireSignIn, isAdmin };
