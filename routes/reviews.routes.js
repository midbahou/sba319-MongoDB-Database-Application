import Reviews from "../models/Reviews.js";
import { Router } from "express";

export const reviewsRouter = new Router();

reviewsRouter.get('/', async (req, res) => {
    try {
        const review = await Reviews.find();
        if(!review) return res.status(404).send('No Reviews to show')
        res.json(review);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' })
    }
});

reviewsRouter.post('/', async (req, res) => {
    try {
        const review = await new Reviews(req.body);
        await review.save()
    
        if(!review) return res.status(404).json({ message: 'Reviews not Found!'});
        res.status(201).json(review)
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message })
    }
})