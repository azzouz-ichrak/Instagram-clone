const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model("Product")
const requireLogin = require('../middleware/requireLogin')


// nameproduct price productImage 


router.post('/addproduct',requireLogin,(req,res)=>{
    const {nameproduct,price,productImage} = req.body 
    if(!nameproduct || !price || !productImage ){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined
    const product = new Product({
        nameproduct,
        price,
        productImage,
        postedBy:req.user
    })
    product.save().then(result=>{
        res.json({product:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/allproduct',requireLogin,(req,res)=>{
    Product.find()
    .populate("postedBy","_id name")
    .then(products=>{
        res.json({products})
    })
    .catch(err=>{
        console.log(err)
    })
})



router.get('/myproduct',requireLogin,(req,res)=>{
    Product.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(myproduct=>{
        res.json({myproduct})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router