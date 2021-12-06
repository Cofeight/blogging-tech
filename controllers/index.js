const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes)
router.get('/',(req, res) => {
    res.send("HELLO FROM CONTROLLERS/INDEX.JS! 5000....RE-PORT-ING FOR DUTY!")
})

module.exports = router;