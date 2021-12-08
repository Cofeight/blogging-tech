const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.render("landing")
})

router.get("/", function (req, res) {
    res.send("fish")
})

router.get('/login', (req, res) => {
    console.log("login route")
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //     res.redirect('/profile');
    //     return;
    // }

   return res.render("login");
});


module.exports = router;