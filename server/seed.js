//this is file is just to add dummy data in mongodb database by using commad node seed.js in the server

import mongoose from "mongoose";
import Startup from "./models/startup.model.js"; // Adjust the path based on your project structure

const dummyStartups = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVjaCUyMHN0YXJ0dXBzfGVufDB8fDB8fHww",
      brand: "TechMitra",
      description: "An IT solutions startup that helps small businesses scale by offering innovative tech support and software development services.",
      fundingGoal: 150000,
      amountRaised: 75000,
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWQlMjB0ZWNoJTIwc3RhcnR1cHN8ZW58MHx8MHx8fDA%3D",
      brand: "EduShakti",
      description: "An EdTech platform focused on providing affordable, high-quality online learning for students across India, from school to competitive exams.",
      fundingGoal: 200000,
      amountRaised: 100000,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661745745478-bb3542627ebc?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhbHRoJTIwc3RhcnR1c3xlbnwwfHwwfHx8MA%3D%3D",
      brand: "HealthSathi",
      description: "A health and wellness startup providing online consultations and fitness programs tailored to the urban Indian lifestyle.",
      fundingGoal: 180000,
      amountRaised: 120000,
    },
    {
      image: "https://images.unsplash.com/photo-1529653762956-b0a27278529c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
      brand: "FinBuddy",
      description: "A FinTech platform helping individuals manage their savings and investments, with easy-to-use mobile apps for better financial planning.",
      fundingGoal: 250000,
      amountRaised: 130000,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1682092699213-6b0b5cdcadef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFncmljdWx0dXJlJTIwc3RhcnR1c3xlbnwwfHwwfHx8MA%3D%3D",
      brand: "AgriKart",
      description: "An online marketplace connecting farmers directly to consumers, offering fresh produce with the goal of uplifting rural communities.",
      fundingGoal: 100000,
      amountRaised: 70000,
    },
    {
      image: "https://images.unsplash.com/photo-1444731961956-751ed90465a5?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZCUyMGRlbGl2ZXJ5c3RhcnR1c3xlbnwwfHwwfHx8MA%3D%3D",
      brand: "FoodWale",
      description: "A food delivery startup offering regional specialties from different parts of India, giving local chefs and home cooks a platform to share their recipes.",
      fundingGoal: 80000,
      amountRaised: 50000,
    },
    {
      image: "https://images.unsplash.com/photo-1616164942261-243e6209c40f?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVjbyUyMGZyaWVuZGx5JTIwZGVsaXZlcnlzdGFydHVzfGVufDB8fDB8fHww",
      brand: "EcoInnovators",
      description: "A sustainability startup focusing on recycling solutions and eco-friendly products to reduce the carbon footprint of everyday life in India.",
      fundingGoal: 220000,
      amountRaised: 100000,
    },
    {
      image: "https://images.unsplash.com/photo-1604510493959-8a20b3630d53?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmRtYWRlJTIwZ29vZHMlMjBkZWxpdmVyeXN0YXJ0dXN8ZW58MHx8MHx8fDA%3D",
      brand: "CraftNest",
      description: "A platform for artisans and craftsmen to sell handmade goods, promoting India’s rich heritage and supporting small businesses.",
      fundingGoal: 50000,
      amountRaised: 30000,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1683319786546-4f902f0d76c7?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbCUyMHBsYXRmb3JtfGVufDB8fDB8fHww",
      brand: "TravelSangam",
      description: "An online travel platform that offers personalized, budget-friendly itineraries, focusing on unique Indian cultural experiences.",
      fundingGoal: 120000,
      amountRaised: 60000,
    },
    {
      image: "https://images.unsplash.com/photo-1521841313031-a1485f842d34?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhcm1lcnMlMjB3b3JraW5nfGVufDB8fDB8fHww",
      brand: "FarmBuddy",
      description: "A tech-driven agricultural startup offering smart farming solutions and modern equipment to increase productivity for Indian farmers.",
      fundingGoal: 160000,
      amountRaised: 110000,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1677187301660-5e557d9c0724?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
      brand: "SkillUdaan",
      description: "A vocational training platform offering a wide range of skill-development courses to empower India’s youth for better job opportunities.",
      fundingGoal: 90000,
      amountRaised: 45000,
    },
    {
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWwlMjBzZXJ2aWNlfGVufDB8fDB8fHww",
      brand: "UrbanSwasth",
      description: "A health startup providing on-demand home healthcare services, including nursing, physiotherapy, and diagnostics, catering to urban areas.",
      fundingGoal: 180000,
      amountRaised: 90000,
    },
    {
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
      brand: "TechVidya",
      description: "An online learning platform for aspiring programmers and engineers, offering comprehensive coding bootcamps and mentorship from industry experts.",
      fundingGoal: 140000,
      amountRaised: 70000,
    },
    {
      image: "https://images.unsplash.com/photo-1621961870738-e09795641318?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVsZWN0cmljYWwlMjB2ZWhpY2xlfGVufDB8fDB8fHww",
      brand: "GreenMiles",
      description: "A sustainable transportation startup focused on electric vehicle (EV) rental services, making eco-friendly commuting accessible to the public.",
      fundingGoal: 230000,
      amountRaised: 150000,
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1683121435740-e290468c71c3?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
      brand: "PetCare",
      description: "A pet care platform offering on-demand grooming, veterinary services, and pet products, aiming to make pet care easier for Indian pet owners.",
      fundingGoal: 90000,
      amountRaised: 50000,
    },
    {
      image: "https://images.unsplash.com/photo-1532795986-dbef1643a596?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlbGxpbmclMjBwbGF0ZnBybXxlbnwwfHwwfHx8MA%3D%3D",
      brand: "ShopMitra",
      description: "An e-commerce startup that supports local Indian shops by offering them a digital platform to sell their products to a wider audience.",
      fundingGoal: 120000,
      amountRaised: 80000,
    },
    {
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FzdGUlMjBtYW5hZ2VtZW50JTIwc29sdXRpb258ZW58MHx8MHx8fDA%3D",
      brand: "CleanIndia",
      description: "A startup dedicated to waste management solutions, providing eco-friendly services for cleaning and recycling in urban areas.",
      fundingGoal: 200000,
      amountRaised: 100000,
    },
    {
      image: "https://images.unsplash.com/photo-1558981105-dc419adc32b1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW4lMjByaWRpbmd8ZW58MHx8MHx8fDA%3D",
      brand: "SafeRide",
      description: "A transportation startup offering safe, affordable, and women-friendly ride-sharing services across major cities in India.",
      fundingGoal: 170000,
      amountRaised: 80000,
    },
    {
      image: "https://images.unsplash.com/photo-1551731409-43eb3e517a1a?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWRlbnRzfGVufDB8fDB8fHww",
      brand: "EduPath",
      description: "A career counseling platform helping students and professionals discover the right career paths through personalized guidance and mentorship.",
      fundingGoal: 110000,
      amountRaised: 60000,
    },
    {
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
      brand: "HealthifyYou",
      description: "A health-tech startup focused on providing personalized fitness and diet plans through a mobile app, designed specifically for Indian users.",
      fundingGoal: 190000,
      amountRaised: 120000,
    }
  ];
  

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ravirock0610:Rockstar0610@cluster0.s08ck.mongodb.net/startupdata",
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
