const express = require('express')
const mongoose = require('mongoose')
const app = express()


const productRouter = require('./routes/product.routes.js')
const homeRouter = require('./routes/home.route.js')


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// routes
app.use('/api/product', productRouter)
app.use('/', homeRouter)


// connect database
const connectDB = async () => {
    try {
        const response = await mongoose.connect(
            "mongodb+srv://syncdecodesDB:devdatabase@backenddb.mupx8xg.mongodb.net/Node-API?appName=BackendDB"
        )
        console.log('connected to database') // optional: console.log(response.connection.host);
        
        app.listen(5000, () => {
            console.log('server is listening or port 5000..')
        })
        
    } catch (err) {
        console.log('Database connection failed', err)
        process.exit(1) // optional: stop app if database fails
    }
}

connectDB()