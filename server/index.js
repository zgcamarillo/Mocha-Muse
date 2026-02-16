require("dotenv").config(); //loading in variables from .env
const connectDB = require("./db");
const express = require("express"); //express- node framework for building servers
const cors = require("cors"); // browsers block request between different ports unless cors allows it
const mongoose = require("mongoose");


const app = express(); // creating an express app instance = " The server object ill configure and run"

app.use(cors()); //enables cors for all request 
app.use(express.json()); //allows server to read JSON data from request 
app.use("/api/products", require("./routes/products"));

app.get("/api/health", (req, res) => { //Get health checkpoint
    res.json({ ok: true, message: "Server is running" });
})

const PORT = process.env.PORT || 5000; //choosing which port to run it on - if missing default to 5000
app.listen(PORT, () => console.log(`API running on port ${PORT}`)); //startss the server and listens to request

mongoose.connection.on("connected", () => {
  console.log("Connected to DB:", mongoose.connection.name);
});

connectDB();
