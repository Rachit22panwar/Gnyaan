const { hashPassword, comparePassword } = require("../helper/authHelper");
const userModel = require("../models/userModel");
const JWT = require("jsonwebtoken");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    //validation
    if (!name) {
      return res.send({ message: 'Name is required' });
    }
    if (!email) {
      return res.send({ message: 'Email is required' });
    }
    if (!password) {
      return res.send({ message: 'Password is required' });
    }
    if (!phone) {
      return res.send({ message: 'Phone no: is required' });
    }
    //checking user
    const existingUser = await userModel.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: 'Already Register please login'
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    }).save();

    res.status(201).send({
      success: true,
      message: 'User Register Successfully',
      user,
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Registration',
      error,
    });
  }
};
//POST Login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: 'Invalid email or password',
      });
    }
    // check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registered',
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send({
        success: false,
        message: 'Invalid password',
      });
    }
    // Token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.status(200).send({
      success: true,
      message: 'Logged in successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login',
    });
  }
};

// Create Payment Intent Controller
const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body; // Amount should be passed from the frontend

    if (!amount) {
      return res.status(400).send({ success: false, message: 'Amount is required' });
    }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe accepts the amount in cents
      currency: "usd", // Specify the currency (change as necessary)
    });

    res.status(200).send({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({
      success: false,
      message: 'Error creating payment intent',
      error: error.message,
    });
  }
};


//test controller
const testController = (req, res) => {
  res.send("Protected Routes");
};

module.exports = { registerController, loginController, testController ,  createPaymentIntent };