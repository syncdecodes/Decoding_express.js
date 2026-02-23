const express = require('express')
const app = express()
const path = require('path')

const people_routes = require('./07routers/people')

app.use(express.static(path.join(__dirname, '..', 'john-smilga-express.js', 'methods-public'))) // static assets
app.use(express.urlencoded({extended: false})) // parse from data
app.use(express.json()) // parse json

app.use('/api/people', people_routes)

app.listen(5000, () => {
    console.log("server is listening on port 5000..")
})
