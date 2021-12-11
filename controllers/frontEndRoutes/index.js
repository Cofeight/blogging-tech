const express = require('express');
const router = express.Router();
const {User, Gopro, Review} = require("../../models");

//
router.get("/", (req, res)=> {
   return res.render("home")
})

//ROUTES TO ALL MODELS PAGE
//EXTRACTS MODEL DATA INTO RAW JSON FORMAT FOR HANDLEBARS_DATA
//FOLDER ACCESS CAN BE CONFIGURED SUCH AS ("folder/subfolder")
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

//ROUTES TO MODEL PAGE BY MODEL ID

router.get("/models/:id",(req,res)=>{
   Gopro.findByPk(req.params.id, {
       include: [{
           model: Review,
           include: [User]
       }]
   })
   .then(goproData=>{
       const handlebarsData = goproData.get({plain:true})
       console.log(handlebarsData);
       res.render("models/single",handlebarsData);
   })
})

//ROUTES TO PROFILE PAGE BY USER ID
router.get("/profile/:id",(req,res)=>{
    User.findByPk(req.params.id, {
        include: [{
            model: Review,
            include: [Gopro]
        }]
    })
    .then(userData=>{
        const handlebarsData = userData.get({plain:true})
        console.log(handlebarsData);
        res.render("profile",handlebarsData);
    })
 })

//ROUTES TO LOGIN PAGE
//REDIRECTS LOGGED IN USER TO THEIR PROFILE PAGE
router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect(`/profile/${req.session.user.id}`)
    }
   return  res.render("login")
})


router.get("/reviews/add/:id",(req,res)=>{
   if(!req.session.user){
       return res.redirect(`/login`)
   }
   Gopro.findByPk(req.params.id).then(singleGopro=>{
       const handlebarsData = singleGopro.get({plain:true})
       console.log(handlebarsData);
       res.render("reviews/add",handlebarsData)
   })
})


module.exports = router;
