const express = require('express')
const app = express()

// Applying logger (middleware function) to all the routes -:
// we can do it manually or by using app.use() => app.use(logger)
// NOTE: Order matters in Express middleware.
// Middleware runs top to bottom. If app.use(logger) is placed AFTER routes, those routes will NOT use the logger middleware.

const logger = require('./013loggerFn.js') // usermade middleware
const authorize = require('./014authorizeFn.js') // usermade middleware
const morgan = require('morgan')

// app.use(logger)
// app.use('/api',logger) // works for api/home/about/products/items
// app.use([logger, authorize]) // order matters if ([authorize, logger]) the fn authorize will run first.
// app.use(morgan) // morgan deprecated // in console it returns - Method url status_code time_taken

app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('/about', (req, res) => {
    res.send('About page')
})
app.get('/api/products', (req, res) => {
    res.send('Products page')
})
// app.get('/api/items',[logger, authorize], (req, res) => {
//     console.log(req.userdata)
//     res.send('Items page')
// }) // Manually passing more than 1 middleware

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


/* 
usermade middlewares - eg logger, authorize in the above code
express provides built in middlewares - eg static => app.use(expres.static(./public))
third part middleware - morgan
*/
