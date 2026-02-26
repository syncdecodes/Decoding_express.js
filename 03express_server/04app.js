const express = require('express')
const path = require('path')
const fs = require('fs')

// const homePage = path.resolve(__dirname, '..', 'john-smilga-express.js', 'navbar-app', 'index.html')
const homePage = path.join(__dirname, '..', '..', 'john-smilga-express.js', 'navbar-app', 'index.html') // we can also write path.join(__dirname, '..', './john-smilga-express.js/navbar-app/index.html')
const stylePage = path.join(__dirname, '..', '..', 'john-smilga-express.js', 'navbar-app', 'styles.css')
const imagePage = path.join(__dirname, '..', '..', 'john-smilga-express.js', 'navbar-app', 'logo.svg')
const logicPage = path.join(__dirname, '..', '..', 'john-smilga-express.js', 'navbar-app', 'browser-app.js')
const app = express() // server created


app.get('/', (req, res) => {
    res.sendFile(homePage)
})
app.get('/styles.css', (req, res) => {
    res.sendFile(stylePage)
})
app.get('/logo.svg', (req, res) => {
    res.sendFile(imagePage)
})
app.get('/browser-app.js', (req, res) => {
    res.sendFile(logicPage)
})
app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})


