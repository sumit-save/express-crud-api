const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(express.json());

// Routes
const rootRoutes = require("./router");
app.use("/api/v1.0", rootRoutes);

// Database Connection Using Mongoose ORM
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, (error) => {
    if (error) throw error;
    console.log("MongoDB Database Connected Successfully");
});

// Create Server On Localhost:8000
app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server Started On Localhost:${PORT}`);
});