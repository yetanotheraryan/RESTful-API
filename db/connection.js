const mongoose = require("mongoose")

const URI = process.env.DATABASE_URL;

const connectDB = async()=>{
    await mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    console.log("DB connected.")
}

module.exports = connectDB