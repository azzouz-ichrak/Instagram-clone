const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Commercant = mongoose.model("Commercant")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
//const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res)=>{
    res.send("hello")
})



router.post('/signup',(req,res)=>{
  const {nomCom, numRegistre, email, typeCom, password, nomResponsable, telephone, adresse, siteweb, logo, description} = req.body
  if( !nomCom || !numRegistre || !email || !typeCom || !password || !nomResponsable || !telephone || !adresse || !siteweb || !logo || !description){
     return res.status(422).json({error:"please add all the fiels"})
    }
Commercant.findOne({email:email})
.then((savedCommercant)=>{
    if(savedCommercant){
        return res.status(422).json({error:"commercant already exists with that email"})
    }
    bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const commercant = new Commercant({
                nomCom, 
                numRegistre, 
                email, 
                typeCom, 
                password, 
                nomResponsable, 
                telephone, 
                adresse, 
                siteweb, 
                logo, 
                description
            })
            commercant.save()
            .then(commercant=>{
                res.json({message:"saved successfuly!!"})
            })
            .catch(err=>{
                console.log(err)
            })
    })
    
})
.catch(err=>{
    console.log(err)
})

})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({err:"please add email or psw"})
    }
    Commercant.findOne({email:email})
    .then(savedCommercant=>{
        if(!savedCommercant){
            return res.status(422).json({err:"invalid email or password"})
        }
        bcrypt.compare(password,savedCommercant.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"successfully signed in"})
                const token = jwt.sign({_id:savedCommercant._id},JWT_SECRET)
                const {_id,nomResponsable,email} = savedCommercant
                res.json({token,commercant:{_id,nomResponsable,email}})
            }
            else{
                return res.status(422).json({err:"invalid email or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router