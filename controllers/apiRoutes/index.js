const express = require('express');
const router = express.Router();
const postRoutes = require("../apiRoutes/postRoutes");

router.use('/posts', postRoutes);
router.get('/',(req, res) => {
    res.send("Halloski API CALLING")
})

module.exports = router;