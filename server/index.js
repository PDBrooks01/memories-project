import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'


const app = express()



app.use(bodyParser.json({limit: "30mb", extended: true})) //for images
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

// mongodb+srv://<username>:<password>@cluster0.tcvjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const CONNECTION_URL = "mongodb+srv://pdbrooks:123412341234@cluster0.tcvjj.mongodb.net/memories"
const PORT = process.env.PORT || 3005

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT,()=> console.log(`Server is ready to roll on port: ${PORT}`)))
    .catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false)//makes sure no warnings in console