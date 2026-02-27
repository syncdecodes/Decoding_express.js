const express = require('express')
const app = express()
const path = require('path')
const { products } = require(path.join(__dirname, '..', 'john-smilga-express.js', 'data.js'))

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({success:true, data:[]})
    }

    res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
    res.send('Error page not found')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000..')
})

app.get('/api/v1/query', (req, res)=>{
    console.log(req.query) // { name: 'john', id: '4' } if no query the empty obj will be returned {}
    res.send('Hello world')
    // in the url path enter `localhost:5000/api/v1/query?name=john&id:n` and check console
})




/* spread operator
array = [1, 2, 3, 4, 5, 6, 7]
array2 = [{name: 'dev'}, {age: 17}]

const sortedarray = {...array}
console.log(sortedarray)

const sortedarray2 = {...array2}
console.log(sortedarray2)
*/



/* 
Above code cases -:
case 1: typo after query?
localhost:5000/api/v1/query?sear=alabny
if the user types sear (type error) instead of search the full json will be sended to the server

case 2: searched product does not exist -:
localhost:5000/api/v1/query?sear=sparky
empty array

Query params are optional and ignored if unknown; 
valid queries that return no data correctly respond with an empty array.

we can't send 2 responses for one single request
*/

/*
object destructuring
products = {
  id: 1,
  Pname: 'albany sofa',
  image: 'https://...',
  price: 399.99,
  description: '...'
}
const {id, Pname, image} = products
console.log({id, Pname, image})
*/
