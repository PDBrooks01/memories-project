require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors= require('cors')


const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true})) //for images
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 3005

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server is ready to roll on port: ${PORT}`)))
.catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false)//makes sure no warnings in console