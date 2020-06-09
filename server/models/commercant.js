const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const commercantSchema = new mongoose.Schema({

    nomCom:{

    }, 
    numRegistre:{

    }, 
    email:{
        type:String,
        required:true
    }, 
    typeCom:[{
        type:ObjectId,
        ref:"Type"
    }], 
    password:{
        type:String,
        required:true
    }, 
    nomResponsable:{
        type:String,
        required:true
    }, 
    telephone:{
        type:Number,
        required:true
    }, 
    adresse:{
        type:String,
        required:true
    }, 
    siteweb:{
        type:String,
        required:true
    }, 
    logo:{
        type:String,
        required:true
    }, 
    description:{
        type:String,
        required:true
    }


    
})

mongoose.model("Commercant",commercantSchema)