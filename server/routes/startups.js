import express from 'express';

const router = express.Router();

// Dummy data
const startups = [
  {
    id: 1,
    image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=TechNova",
    brand: "TechNova",
    description: "A cutting-edge AI startup revolutionizing the tech industry.",
    fundingGoal: 50000,
    amountRaised: 20000,
  },
  {
    id: 2,
    brand: "EcoEnergy",
    description: "Providing affordable, sustainable energy solutions.",
    image: "https://via.placeholder.com/150/008000/FFFFFF?text=EcoEnergy",
    fundingGoal: 75000,
    amountRaised: 30000,
  },
  {
    id: 3,
    brand: "Healthify",
    description: "A healthcare platform connecting patients and doctors.",
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Healthify",
    fundingGoal: 60000,
    amountRaised: 45000,
  },
  {
    id: 4,
    brand: "EduVerse",
    description: "Creating immersive learning experiences using virtual reality.",
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=EduVerse",
    fundingGoal: 100000,
    amountRaised: 70000,
  },
  {
    id: 5,
    brand: "GreenGro",
    description: "Dedicated to urban farming and fresh produce accessibility.",
    image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=GreenGro",
    fundingGoal: 30000,
    amountRaised: 15000,
  }
];

// GET route to fetch all startups
router.get('/', (req, res) => {
  res.json(startups);
});

export default router;
