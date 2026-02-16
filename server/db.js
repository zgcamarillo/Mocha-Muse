const mongoose = require("mongoose"); //importing mongoosse

// mongoose.connect(process.env.MONGO_URI) //connecting to database w credentials 
// console.log("DB:", mongoose.connection.name);
    // .then(() => console.log("MongoDB connected")) //success case
    // .catch((err) => console.error("MongoDB connection error:", err)); // error handling 

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
        console.log("Connected DB name:", mongoose.connection.name);
    } catch (err) {
        console.log("MongoDB connection error:", err)
    }
}
module.exports = connectDB;
