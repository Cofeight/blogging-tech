const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');
//const frontEndRoutes = require('./frontEndRoutes');

router.use('/api', apiRoutes)


router.get("/", (req, res) => {
    res.send("hello from controllers/index.js")
})


//router.use('/', frontRoutes)
router.get('/sessions',(req, res) => {
    res.json(req.session)
})

module.exports = router;