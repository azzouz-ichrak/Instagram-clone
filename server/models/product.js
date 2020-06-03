const mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId;
const ProductSchema = new mongoose.Schema({
    nameproduct: {
        type:String,
        required: true
    },
    category:[{
        type:ObjectId,
        ref:"Category"
    }],
    price: {
        type:String,
        required: true
    },
    productImage: {
        type:String,
        required: true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
     }
})

module.exports = mongoose.model('Product', ProductSchema)