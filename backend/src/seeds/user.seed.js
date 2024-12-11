import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [ 
  {
    email: "gautam@example.com",
    fullName: "Gautam Pandey",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
 
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
