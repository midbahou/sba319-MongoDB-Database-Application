import Product from "../models/Product.js";
import { Router } from "express";

export const productRouter = new Router();

productRouter.get('/', async (req, res) => {
    try {
        const product = await Product.find();
        if(!product) return res.status(404).send('No Product to show')
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' })
    }
});

productRouter.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message })
    }
})