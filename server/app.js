const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI}= require('./keys')



mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',()=>{
    console.log("err connecting",err)
})

require('./models/user')
require('./models/commercant')
require('./models/post')
require('./models/product')
require('./models/category')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/product'))
app.use(require('./routes/category'))



app.listen(PORT,()=>{
    console.log("server is running on the port : 5000")
})