const mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;
const OfferSchema = new mongoose.Schema({
    titre: {
        type:String,
        required: true
    },
   /* category:[{
        type:ObjectId,
        ref:"Category"
    }],  */
    products: [{   
        text:String,
        prod:{type:ObjectId,
            ref:"Poduct"}
    }],
    postedBy:{
        type:ObjectId,
        ref:"User"
     },
     qtt:{
         type:Number,
         require: true
     },
     typeOffre:{
         type:String,
         require: true
     },
     totalprix: [{   
        text:Number,
        prix:{type:ObjectId,
            ref:"Poduct"}
    }],
    nvprix:{
        type:Number
    }
})

module.exports = mongoose.model('Offer', OfferSchema)