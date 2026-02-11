// Data for our products page
require("dotenv").config(); //loading in var from .env 
const mongoose = require("mongoose"); //importing mongoose
const Product = require("./models/Product"); //importing my model

mongoose.connect(process.env.MONGO_URI); //connecting the database 

const products = [ //this array is holding the data i want to seed 
    {
        title: "",
        description: "",
        price: 0.00,
        image: "",
        type: ""
    }
];

Product.insertMany(products) // inserting it all in an array 
    .then(() => {
        console.log("Seeded products"); //confirms that the script works 
        process.exit(); //immediatly stops the node process
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })