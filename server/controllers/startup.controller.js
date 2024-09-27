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
  const { brand, description, fundingGoal } = req.body;

  const startup = new Startup({
    image: `https://robohash.org/${brand}`,
    brand,
    description,
    fundingGoal,
    amountRaised: 0,
  });

  try {
    const newStartup = await startup.save();
    res.status(201).json(newStartup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateStatup = async (req, res) => {
  const { id } = req.params;
  const {amountRaised} = req.body;

  const updateData = {};
  if (amountRaised !== undefined) {
    updateData.amountRaised = amountRaised;
  }

  try {
    // Find the startup by ID and update it with the new data
    const updatedStartup = await Startup.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation rules are applied
    });

    if (!updatedStartup) {
      return res.status(404).json({ message: "Startup not found" });
    }

    res.status(200).json(updatedStartup);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating startup.", error });
  }
};
