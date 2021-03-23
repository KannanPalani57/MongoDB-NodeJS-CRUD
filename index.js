const express = require("express")
const mongoose = require("mongoose")
const app = express();
const product = require("./routes/product")
const connection = require("./db")
const ejs = require('ejs')
const cors = require("cors")


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
//using products route
app.use("/", product) 

app.listen(4000, () => {
    console.log("The server is running on port 4000")
})      