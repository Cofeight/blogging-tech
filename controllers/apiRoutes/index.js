const express = require('express');
const router = express.Router(); 
const goproRoutes = require ("./goproRoutes")
const userRoutes = require("./userRoutes");
const reviewRoutes = require("./reviewRoutes");


router.use('/gopro', goproRoutes);
router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.get('/',(req, res) => {
    res.send("apiRoutes/index.js has been reached.")
})

module.exports = router;