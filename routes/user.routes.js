import express from 'express';
import User from '../models/User.js';
import { Router } from 'express';

export const userRouter = new Router();

userRouter.get('/', async (req, res) => {
    try {
        const user = await User.find() // retrieve all users
        res.json(user)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

userRouter.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id) // retrieve all users
        res.json(user)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

userRouter.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user)
    } catch (e) {
        console.error(e);
        res.status(404).json({ message: e.message })
    }
});

userRouter.patch('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true } // returns the updated document and ensures data validation
        );

        if(!user) return res.status(404).send('Not Found!')
        res.status(200).send(user)
    } catch (error) {
        console.error(error);
        res.status(500).send('server error')
    }
});


userRouter.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) return res.status(404).send("User Not Found!")
        res.status(200).json({ message: "User deleted successfully!"})
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server Error" })
    }
})


