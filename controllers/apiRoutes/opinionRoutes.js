const express = require('express');
const router = express.Router();
const { Opinion } = require('../../models/');

router.get("/", (req, res) => {
    Post.findAll().then(PostData => {
        res.json(PostData);
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})

router.get("/:id", (req, res) => {
    Post.findByPk(req.params.id).then(singlePost => {
        if (singlePost) {
            res.json(singlePost);
        } else {
            res.status(404).json({ err: "No post was found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err });
    })
})

router.post("/", (req, res) => {
    Post.create({
        like: req.body.like,
        review: req.body.review,
        user_id: req.body.user_id,
        //maybe user.id?????
        PostId: req.body.post_id
        //maybe post.id?????
    }).then(newPost => {
        res.json(newPost)
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})

router.put("/:id", (req, res) => {
    Post.update({
        like: req.body.like,
        review: req.body.review,
        user_id: req.body.user_id,
        //maybe user.id?????
        PostId: req.body.post_id
        //maybe post.id?????
    }, {
        where: {
            id: req.params.id
        }
    }).then(updatedPost => {
        if (updatedPost[0]) {
            res.json(updatedPost)
        } else {
            res.status(404) / json({ err: "There were no posts found!" })
        }
        res.json(updatedPost)
    }).catch(err => {
        console.error(err);
        res.status(500).json({ err });
    })
})


router.delete("/:id", (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedPost => {
        if (deletedPost) {
            res.json(deletedPost)
        } else {
            res.status(404).json({ err: "Post could not be found." })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err })
    })
})
module.exports = router;