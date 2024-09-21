const express = require("express"); 
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require('morgan');
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Import and configure Stripe

//configure env
dotenv.config();
//database config
connectDB();
//rest object
const app = express();
const PORT = process.env.PORT || 8080;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

//Port and server setup
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
