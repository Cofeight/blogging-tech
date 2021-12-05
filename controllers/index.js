const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes)
router.get('/',(req, res) => {
    res.send("HI FROM CONTROLLER INDEX! LOCAL HOST 5000")
})

module.exports = router;