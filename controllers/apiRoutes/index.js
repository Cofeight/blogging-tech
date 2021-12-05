const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.send("Halloski API CALLING")
})

module.exports = router;