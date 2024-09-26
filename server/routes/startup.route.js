import express from 'express';
import { getAllStartups, createStartup } from '../controllers/startup.controller.js';

const router = express.Router();

// GET route to fetch all startups
router.get('/', getAllStartups);

// POST route to add a new startup
router.post('/', createStartup);

export default router;
