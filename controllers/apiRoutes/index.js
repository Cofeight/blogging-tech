const express = require('express');
const router = express.Router();
const postRoutes = require("./postRoutes");
const userRoutes = require("./userRoutes");
const opinionRoutes = require("./opinionRoutes");

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/opinions', opinionRoutes);
router.get('/',(req, res) => {
    res.send("apiRoutes/index.js has been reached.")
})

module.exports = router;