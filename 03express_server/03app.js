const express = require('express')
const app = express() // server created

// Home page
app.get('/', (req, res) => {
    console.log('user hit the server')
    res.send('Home page')
})

// About page
app.get('/about', (req, res) => {
    console.log('user hit the server')
    res.status(200).send('About page') // Network -> Disable cache -> status code = 200
})

app.all('*', (req, res) => {
    // .all() => For any HTTP method and any path, run this handler.
    // .all(path, callback function) => * is a wilcard path, used for literally every route
    res.status(404).send('resource not found')
})
// If the user comes to server and tries to access resources that doesn't exist
// Express automatically throws 404 - server could not find the requested resource


app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})

// app.get (default)
// app.post
// app.put
// app.delete
// app.delete
// app.all
// app.use
// app.listen