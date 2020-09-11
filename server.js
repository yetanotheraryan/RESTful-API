require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connection");

connectDB();
// this below lets our server accept json as body inside post or get element.
app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use('/subscribers', subscribersRouter)

app.listen(5000, (req, res)=>{
    console.log("server has started!");
});