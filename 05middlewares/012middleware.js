// Middleware in Express.js: are functions that executes during the request to the server
// each middleware function has access to request and response object they are literally everywhere in express.js

const express = require('express')
const app = express()

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next() // Home page
}

app.get('/', logger, (req, res) => {
    res.status(200).send('Home page')
})
app.get('/about', (req, res) => {
    res.status(200).send('About page')
})
app.listen(3000, () => {
    console.log('server is listening on port 3000')
})


/* 
request => response
request => middleware => response

In the above code logger is a middleware function
when you work with middleware you must pass it on to the next middleware, unless
you are terminating the whole cycle by sending back the response 
*/


/*
function hello(){
console.log('hello')
}

setTimeout(hello, 1000)
we dont need to invoke a fuction when paasing it to the receiving fuction
*/