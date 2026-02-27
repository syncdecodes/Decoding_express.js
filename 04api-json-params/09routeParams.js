const express = require('express')
const app = express()
const path = require('path')
const { products } = require(path.join(__dirname, '..', '..', 'john-smilga-express.js', 'data.js'))

app.get('/', (req, res) => {
    // basic API 
    res.send('<h1>Home page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

// ROUTE PARAMS
app.get('/api/products/:id', (req, res) => {
    console.log(req.params) // return { id: 'n' }, if req.url = localhost:5000/api/products/n; All values from the URL (including req.params) are strings
    const id_num = Number(req.params.id)

    const singleProduct = products.find((product) => product.id == id_num)

    if (!singleProduct) {
        return res.status(404).send('Error page not found')
    }

    res.json(singleProduct)
})

app.get('/api/products/:pid/reviews/:rid', (req, res) => {
    console.log(req.params) // { pid: '10', rid: 'abc' }
    res.send(req.params)
})

app.all('*', (req, res) => {
    res.send('Error page not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})

