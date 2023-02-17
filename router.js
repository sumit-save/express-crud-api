const express = require("express");

const router = new express.Router();

// Posts Routes
const postsRoutes = require("./routes/posts");
router.use("/post", postsRoutes);

module.exports = router;