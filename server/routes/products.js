const express = require("express"); //importing express 
const Product = require("../models/Product"); //importing product model=

const router = express.Router(); //creating router instance 
 
router.get("/", async (req, res) => { // creating GET route 
    const products = await Product.find(); // telling mongoose to grab all the products 
    res.json(products); // send them as json 
});

module.exports = router;

