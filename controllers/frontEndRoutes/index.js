const express = require('express');
const router = express.Router();
const {User, Gopro, Review} = require("../../models");
//
router.get("/", (req, res)=> {
   return res.render("home")
})


router.get("/models", (req, res)=> {
     Gopro.findAll()
   .then(goproData=> {
      console.log(goproData)
      console.log("+++++++++++++++++++++++++++++++++++++")
      const goproHandlebarsData = goproData.map(item => item.get({plain: true}))
      console.log(goproHandlebarsData)
    return res.render("models/index", {
        models: goproHandlebarsData
    })
})
})

//
//router.get("/models", (req, res) => {
//   Gopro.findAll()
//   .then(goproData=> {
//      console.log(goproData)
//      console.log("+++++++++++++++++++++++++++++++++++++")
//      const goproHandlebarsData = goproData.map(item => item.get({plain: true}))
//      console.log(goproHandlebarsData)
//      res.render("userposts/index", {
//         posts: goproHandlebarsData
//      })
//   })
//})
//




//router.get("/userposts/:id",(req,res)=>{
//   Post.findByPk(req.params.id,{
//       include:[{
//           model:Post,
//           include:[User]
//       }]
//   })
//   .then(postsData=>{
//       const handlebarsData = postsData.get({plain:true})
//       console.log(handlebarsData);
//       res.render("userposts/single",handlebarsData);
//   })
//})

//router.get("/login",(req,res)=>{
//   if(req.session.user){
//       res.render(`/profile/${req.session.user.id}`)
//   }
//  return  res.render("profile")
//})
//
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


//router.get("/login", (req, res) => {
//   console.log("login route")
//   return res.render("login")
//})
//
//router.get("/logout", (req, res) => {
//   console.log("logout route")
//   return res.render("logout/index")
//})
//
//router.get("/signup", (req, res) => {
//   console.log("signup route")
//   return res.render("signup/index")
//})


//router.get("/profile/:id",(req,res)=>{
//   User.findByPk(req.params.id,{
//       include:[{
//           model:Review,
//           include:[Post]
//       }]
//   }).then(userData=>{
//       const hbsData = userData.get({plain:true})
//       console.log(hbsData);
//       res.render("profile",hbsData);
//   })
//})


//router.get("/posts/add/:id",(req,res)=>{
//   if(!req.session.user){
//       return res.redirect(`/login`)
//   }
//   Post.findByPk(req.params.id).then(singleUserPost=>{
//       const handlebarsData = singleUserPost.get({plain:true})
//       console.log(handlebarsData);
//       res.render("post/add",handlebarsData)
//   })
//}