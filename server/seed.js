//this is file is just to add dummy data in mongodb database.


import mongoose from "mongoose";
import Startup from "./models/startup.model.js"; // Adjust the path based on your project structure

const dummyStartups = [
  {
    image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=TechNova",
    brand: "TechNova",
    description: "A cutting-edge AI startup revolutionizing the tech industry.",
    fundingGoal: 100000,
  },
  {
    image: "https://via.placeholder.com/150/008000/FFFFFF?text=EcoEnergy",
    brand: "EcoEnergy",
    description: "Providing affordable, sustainable energy solutions.",
    fundingGoal: 75000,
  },
  {
    image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Healthify",
    brand: "Healthify",
    description: "A healthcare platform connecting patients and doctors.",
    fundingGoal: 50000,
  },
  {
    image: "https://via.placeholder.com/150/FFA500/FFFFFF?text=EduVerse",
    brand: "EduVerse",
    description:
      "Creating immersive learning experiences using virtual reality.",
    fundingGoal: 60000,
  },
  {
    image: "https://via.placeholder.com/150/00FFFF/FFFFFF?text=GreenGro",
    brand: "GreenGro",
    description: "Dedicated to urban farming and fresh produce accessibility.",
    fundingGoal: 30000,
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ravirock0610:<password>@cluster0.s08ck.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    // Clear existing data
    await Startup.deleteMany({});

    // Insert dummy data
    const startups = await Startup.insertMany(dummyStartups);
    console.log("Dummy data added:", startups);

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

seedDatabase();
