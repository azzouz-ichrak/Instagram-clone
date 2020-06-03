const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Category = mongoose.model("Category")
const requireLogin = require('../middleware/requireLogin')


router.get('/allcategory',requireLogin,(req,res)=>{
    Category.find()
    //.populate("postedBy","_id name")
    .then(categorys=>{
        res.json({categorys})
    })
    .catch(err=>{
        console.log(err)
    })
})

//
router.post('/addcategory',requireLogin,(req,res)=>{
    const {name} = req.body 
    if(!name){
      return  res.status(422).json({error:"Plase add the name of category"})
    }
    req.user.password = undefined
    const category = new Category({
        name
    })
    category.save().then(result=>{
        res.json({category:result})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router