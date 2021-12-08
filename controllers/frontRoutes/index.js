const express = require('express');
const router = express.Router();

router.get("/", (req, res)=> {
   return res.render("home")
})

router.get("/login", (req, res) => {
   console.log("login route")
   return res.render("login/index")
})

router.get("/logout", (req, res) => {
   console.log("logout route")
   return res.render("logout/index")
})

router.get("/signup", (req, res) => {
   console.log("signup route")
   return res.render("signup/index")
})

////////////////////////////////SAVE ME PLEASE

//router.get('/login', (req, res) => {
//    console.log("login route")
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //     res.redirect('/profile');
    //     return;
    // }

//   return res.render("login");
//});


module.exports = router;