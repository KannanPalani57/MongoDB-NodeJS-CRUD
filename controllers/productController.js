var express = require('express')
var router = express.Router()
const Product = require("../models/products")

const createProduct = (req, res) => {
    // const data = req.body;
    // if(data.productName!==null && data.productName !== undefined){
    //     res.render("index.ejs", {message: "Product name can't be empty"})
    // }else{
    // }
    const { productName, quantity, price, manufacturedAt } = req.body;
    Product.create({
        productName,
        quantity,
        price,
        manufacturedAt
    }).then(data => res.redirect("/"))
    .catch(err => console.log(err))
}

const updateProduct = (req, res) => {
    const {  productName, quantity, price, manufacturedAt } = req.body;
    console.log(req.body)
    const id  = req.params.id;
    Product.findByIdAndUpdate({
        "_id": id
    },
        {
        productName,
        quantity,
        price,
        manufacturedAt: manufacturedAt
    }).then(data => res.redirect("/"))
    .catch(err => console.log(err)
)
}

const deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.deleteOne({
        "_id": id
    }).then(data => res.redirect("/"))
    .catch(err => console.log(err))
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct
}

