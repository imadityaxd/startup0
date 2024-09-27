import express from 'express';
import { getAllStartups, createStartup, updateStatup } from '../controllers/startup.controller.js';

const router = express.Router();

// GET route to fetch all startups
router.get('/', getAllStartups);

// POST route to add a new startup
router.post('/', createStartup);

router.put("/:id", updateStatup)

export default router;
