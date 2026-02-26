const express = require('express')
const app = express() // server created

// setup static and middleware
app.use(express.static('./2-express.js/public')) // or app.use(express.static(path.join(__dirname, '..', './john-smilga-express.js/navbar-app')))
// static assests are just files that server does not have to change
app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})
app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})

