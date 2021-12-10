const express = require('express');
const router = express.Router();
const {Gopro} = require("../../models")


//COMPLETED AT 1:10:00
//BE SURE TO CHECK SERVER.js & SEED.js for sequelize.sync status


// CREATE - .post("/(tablename)")

// READ ALL - .get("/(tablename)")

// UPDATE - .put("/(tablename)/(:id)")

// DELETE - .delete("/(tablename)/(:id)")

// READ ONE - .get("/(tablename)/(:id)")


//READ ALL
router.get("/", (req, res) => {
    Gopro.findAll().then(goproData => {
        res.json(goproData);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})

//READ ONE
router.get("/:id", (req, res) => {
    Gopro.findByPk(req.params.id)
    .then(singleGopro => {
        if(singleGopro){
            res.json(singleGopro)
        } else {
            res.status(404).json({ err:"No Gopro was found."})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err });
    });
});

//CREATE 
router.post("/", (req, res)=> {
    Gopro.create({
        model:req.body.model,
        image:req.body.image
    })
    .then(newGopro=> {
        res.json(newGopro)
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ err });
    });
});

//UPDATE
router.put("/:id", (req, res)=>{
    Gopro.update({
        model:req.body.model,
        image:req.body.image
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
    Gopro.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(deletedGopro=> {
        if(deletedGopro){
            res.json(deletedGopro)
        } else {
            res.status(404).json({err:"No Gopro could not be found."})
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err})
    });
});


module.exports = router;