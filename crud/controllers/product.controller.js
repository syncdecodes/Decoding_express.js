const Product = require('../model/product.model.js')

const createProduct =  async (req, res) => {
    try {
        await Product.create(req.body)
        res.status(201).json({msg: 'product created successfully'})
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateProduct =  async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body) // update with req.body

        if (!product) {
            return res.status(404).json({ msg: `Product with id ${id} not found` })
        }

        res.status(200).json({msg: 'product updated successfully'})

    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ success: false, msg: `Product with id ${id} not found` })
        }
        res.status(200).json({msg: 'product deleted successfully'})
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({}) // all documents
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getSpecificProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)

        if (!product) {
            return res.status(404).json({ msg: 'Product not found' })
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getProduct, 
    getSpecificProduct
}