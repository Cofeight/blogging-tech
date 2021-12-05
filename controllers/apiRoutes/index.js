const express = require('express');
const router = express.Router();
const postRoutes = require("../apiRoutes/postRoutes");
const userRoutes = require("../apiRoutes/userRoutes");

router.use('/posts', postRoutes);
router.use("/users", userRoutes);
router.get('/',(req, res) => {
    res.send("Halloski API CALLING")
})

module.exports = router;