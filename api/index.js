const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const bdyp = require('body-parser')
const { urlencoded } = require('body-parser')
const exp = require('express')
const app = exp()



const connect = async () => {
    try {
            await mongoose.connect(`mongodb+srv://thomasalans011:thomasalans@cluster0.boo2iv6.mongodb.net/`,{   
    });
    console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Failed to connect to MongoDB: ", error);
    }

}
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST, PATCH, DELETE, OPTIONS");
    next();
});
app.use(cors());

mongoose.connection.on("connected", () => {
    console.log("connected")
})


app.listen(4005, () => {
    connect();  
})