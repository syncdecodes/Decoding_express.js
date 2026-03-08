const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter product name']
        },

        quantity: {
            type: Number,
            required: [true, "please enter product quantity"],
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },

    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', ProductSchema) // creating a model
module.exports = Product;


/* 
mongoose is an ODM (Object Data Modeling) library

It helps Node.js talk to MongoDB
It lets you:

Define data structure (schemas)
Validate data
Use JS objects instead of raw MongoDB queries
*/

/* 
Creating a Schema
const ProductSchema = mongoose.Schema()

A Schema is a blueprint for how documents should look in a MongoDB collection.

*/

/* 
Code explaination -:

name: {
    type: String,
    required: [true, 'Please enter product name']
}
type: String → must be a string
required: true → cannot be missing
eg - "name": "iPhone 15"


quantity: {
    type: Number,
    required: [true, "please enter product quantity"],
    default: 0
}
If not provided, MongoDB automatically sets it to 0
eg - "quantity": 5
if omitted - "quantity": 0


price: {
    type: Number,
    required: true,
    default: 0
}
Defaults to 0 if not passed
If required: true + default, the default will be used if you don’t send price.
eg - "price": $12000


image: {
    type: String,
    required: false
}
Optional field
eg - "image": "https://example.com/product.png"


Schemas options (timestamps)
{
    timestamps: true
}
Mongoose automatically adds -:
createdAt: Date
updatedAt: Date
*/

/* 
So each product document looks like -:

{
  "_id": "...",
  "name": "Laptop",
  "price": 1000,
  "quantity": 3,
  "createdAt": "2026-01-04T10:00:00Z",
  "updatedAt": "2026-01-04T10:05:00Z"
}


const Product = mongoose.model('Product', ProductSchema)
creates a mongoDB collection called: products (lowercase + plural)
*/