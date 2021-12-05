const express = require('express');
const router = express.Router();
const {Post} = require('../../models/Post.js');


router.get("/", (req, res) => {
    res.send("THIS IS HELLO FROM DA API POSTS!")
})

module.exports = router;