import mongoose from "mongoose";

// Define the schema
const startupSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fundingGoal: {
      type: Number,
      required: true,
    },
    amountRaised: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Startup = mongoose.model("Startup", startupSchema);

export default Startup;
