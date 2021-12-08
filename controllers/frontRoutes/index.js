const express = require('express');
const router = express.Router();
const {User, Opinion, Post} = require("../../models");

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

router.get("/posts", (req, res) => {
   Post.findAll().then(PostsData=> {
      console.log(PostsData)
      console.log("+++++++++++++++++++++++++++++++++++++")
      const PostHbsData = PostsData.map(item => item.get({plain: true}))
      console.log(PostHbsData)
      res.render("posts/index", {
         posts: PostHbsData
      })
   })
})


router.get("/login",(req,res)=>{
   if(req.session.user){
       return res.redirect(`/profile/${req.session.user.id}`)
   }
  return  res.render("login")
})

module.exports = router;


////////////////////////////////SAVE

//router.get('/login', (req, res) => {
//    console.log("login route")
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //     res.redirect('/profile');
    //     return;
    // }

//   return res.render("login");
//});
