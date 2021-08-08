import {} from 'dotenv/config'
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

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 3005

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server is ready to roll on port: ${PORT}`)))
.catch((error)=> console.log(error.message))

mongoose.set('useFindAndModify', false)//makes sure no warnings in console