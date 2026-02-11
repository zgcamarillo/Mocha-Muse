const mongoose = require("mongoose"); //importing mongoosse

mongoose.connect(process.env.MONGO_URI) //connecting to database w credentials 
    .then(() => console.log("MongoDB connected")) //success case
    .catch(() => console.error(err)); // error handling 