const express = require('express');
const router = express.Router();
const { Opinion } = require('../../models/');

router.get("/", (req, res) => {
    Opinion.findAll().then(opinionData => {
        res.json(opinionData);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})

router.get("/:id", (req, res) => {
    Opinion.findByPk(req.params.id).then(singleOpinion => {
        if (singleOpinion) {
            res.json(singleOpinion);
        } else {
            res.status(404).json({ err: "Sorry, nothing was found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
    })
})

router.post("/", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "Login is required." })
    }
    Opinion.create({
        like: req.body.like,
        review: req.body.review,
        user_id: req.body.user_id,
        //maybe user.id?????
        opinion_id: req.body.opinion_id,
        //maybe post.id?????
    }).then(newOpinion => {
        res.json(newOpinion)
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})

router.put("/:id", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "Login is required." })
    }
    Opinion.findByPk(req.params.id).then(foundOpinion => {
        if (req.session.user.id !== foundOpinion.UserId) {
            return res.status(403).json({ err: "This review cannot be edited." })
        }

        Opinion.update({
            like: req.body.like,
            review: req.body.review,
            //maybe user.id?????
            opinion_id: req.body.opinion_id
            //maybe post.id?????
        },
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(updatedOpinion => {
                if (updatedOpinion[0]) {
                    res.json(updatedOpinion)
                } else {
                    res.status(404).json({ err: "There were no posts found!" })
                }
                res.json(updatedOpinion)
            }).catch(err => {
                console.error(err);
                res.status(500).json({ err });
            });
    }).catch(err=> {
        console.error(err);
        res.status(500).json({ err });
    });
});

router.delete("/:id", (req, res) => {
    if (!req.session.user) {
        return res.status(403).json({ err: "Login is required." })
    }
    Opinion.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedOpinion => {
        if (deletedOpinion) {
            res.json(deletedOpinion)
        } else {
            res.status(404).json({ err: "Opinion could not be found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err })
    })
})
module.exports = router;