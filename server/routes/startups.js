const express = require('express');
const router = express.Router();
const Startup = require('../models/Startup');

// Get all startups
router.get('/', async (req, res) => {
    try {
        const startups = await Startup.find();
        res.json(startups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new startup
router.post('/', async (req, res) => {
    const startup = new Startup({
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
    });

    try {
        const newStartup = await startup.save();
        res.status(201).json(newStartup);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
