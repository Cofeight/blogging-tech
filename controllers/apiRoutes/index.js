const express = require('express');
const router = express.Router();
const postRoutes = require("../apiRoutes/postRoutes");
const userRoutes = require("../apiRoutes/userRoutes");
const opinionRoutes = require("../apiRoutes/opinionRoutes");

router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/opinions', opinionRoutes);
router.get('/',(req, res) => {
    res.send("apiRoutes/index.js has been reached.")
})

module.exports = router;