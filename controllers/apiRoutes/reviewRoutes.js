const express = require('express');
const router = express.Router();
const { Review } = require('../../models/');


// CREATE - .post("/(tablename)")

// READ ALL - .get("/(tablename)")

// UPDATE - .put("/(tablename)/(:id)")

// DESTROY - .delete("/(tablename)/(:id)")

// READ ONE - .get("/(tablename)(:id)")


//READ ALL
router.get("/", (req, res) => {
    Review.findAll().then(reviewData => {
        res.json(reviewData);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})

//READ ONE
router.get("/:id", (req, res) => {
    Review.findByPk(req.params.id)
    .then(singleReview => {
        if(singleReview){
            res.json(singleReview)
        } else {
            res.status(404).json({ err:"No Review was found."})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
});

//CREATE 
router.post("/", (req, res)=> { 
    Review.create({
        rating:req.body.rating,
        review:req.body.review,
        UserId:req.body.UserId,
        GoproId:req.body.GoproId
    })
    .then(newReview=> {
        res.json(newReview)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ err });
    });
});

//UPDATE
router.put("/:id", (req, res)=>{
    Review.update({
        rating:req.body.rating,
        review:req.body.review,
    },{
        where: {
            id:req.params.id
        }
    })
    .then(updatedData => {
        if(updatedData[0]){
            res.json(updatedData)
        } else {
            res.status(404).json({err:"There were no Gopros found!"})
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ err });
    });
});

//DELETE
router.delete("/:id", (req, res)=>{
    Review.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(deletedReview=> {
        if(deletedReview){
            res.json(deletedReview)
        } else {
            res.status(404).json({err:"Review could not be found."})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err})
    });
});

    module.exports = router;



    

    //
//
////    if (!req.session.user) {
//        return res.status(403).json({ err: "Login is required." })
//    }
//Review.findByPk(req.params.id)
//.then(foundReview => {
//    if (req.session.user.id !== foundReview.UserId) {
//        return res.status(403).json({ err: "This review cannot be edited." })
//    }





//if (!req.session.user) {
//    return res.status(403).json({ err: "Login is required." });
//}
//Review.findByPk(req.params.id).then(foundReview => {
//    if (req.session.user.id !== foundReview.UserId) {
//        return res.status(403).json({ err: "not your Review!" });
//    }