var express = require('express')
var router = express.Router()
const Product = require("../models/products")
const productController = require("../controllers/productController")
const ejs = require("ejs")

// define the home page route
router.get('/', (req,res) => {

  Product.find({}).then(data => res.render("index.ejs", { data:data }))
    .catch(err => console.log(err))
  
})

// define the about route
router.post('/create-product', productController.createProduct)

//update product

router.post("/update-product/:id", productController.updateProduct)

router.get("/delete-product/:id", productController.deleteProduct)

module.exports = router    