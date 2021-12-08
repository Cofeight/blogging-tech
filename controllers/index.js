const express = require('express');
const router = express.Router();
const apiRoutes = require('./apiRoutes');
const frontRoutes = require('./frontRoutes');

router.use('/api', apiRoutes)
router.use('/', frontRoutes)


router.get('/sessions',(req, res) => {
    res.json(req.session);
})

module.exports = router;