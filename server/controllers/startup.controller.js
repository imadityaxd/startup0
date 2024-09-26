import Startup from "../models/startup.model.js";

// Function to get all startups
export const getAllStartups = async (req, res) => {
  try {
    const startups = await Startup.find();
    res.json(startups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to create a new startup
export const createStartup = async (req, res) => {
  const { image, brand, description, fundingGoal } = req.body;

  const startup = new Startup({
    image,
    brand,
    description,
    fundingGoal,
  });

  try {
    const newStartup = await startup.save();
    res.status(201).json(newStartup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
