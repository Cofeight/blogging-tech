const express = require('express');
const router = express.Router();
const { User } = require('../../models/');
const bcrypt = require('bcrypt');

// CREATE - .post("/(tablename)")

// READ ALL - .get("/(tablename)")

// UPDATE - .put("/(tablename)/(:id)")

// DESTROY - .delete("/(tablename)/(:id)")

// READ ONE - .get("/(tablename)(:id)")


//READ ALL
router.get("/", (req, res) => {
    User.findAll()
        .then(UserData => {
            res.json(UserData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ err });
        });
});

//LOGIN ROUTE
router.post("/login", (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
        }
    })
        .then(foundUser => {
            if (!foundUser) {
                return req.session.destroy(() => {
                    return res.status(401).json({ err: "invalid username or password." })
                })
            }
            if (!req.body.password) {
                return req.session.destroy(() => {
                    return res.status(401).json({ err: "invalid username or password." })
                })
            }
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.user = {
                    id: foundUser.id,
                    email: foundUser.email,
                    username: foundUser.username
                };
                return res.json({
                    id: foundUser.id,
                    email: foundUser.email,
                    username: foundUser.username
                })
            } else {
                req.session.destroy(() => {
                    return res.status(401).json({ err: "invalid username or password." });
                });
            }
        }).catch(err => {
            console.log(err);
            res.status(500).json({ err })
        })
});


//DESTROY SESSION / LOGOUT
//REDIRECTS TO LOGIN PAGE
router.get('/logout', (req, res) => {
    if (req.session.user) {
      req.session.destroy(() => {
        res.status(204).redirect(`/login`)
      });
    } else {
      res.status(404).redirect(`/login`);
    }
  });


//READ ONE
router.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
        .then(singleUser => {
            if (singleUser) {
                res.json(singleUser);
            } else {
                res.status(404).json({ err: "No user was found." })
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ err });
        });
});

//CREATE
router.post("/", (req, res) => {
    User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
        .then(newUser => {
            req.session.user = {
                id: newUser.id,
                email: newUser.email,
                username: newUser.username
            };
            res.json(newUser);
        })
        .catch(err => {
            console.error(err);
            req.session.destroy(() => {
                res.status(500).json({ err });
            });
        });
});

//UPDATE
router.put("/:id", (req, res) => {
    User.update(
        {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(updatedData => {
            if (updatedData[0]) {
                res.json(updatedData)
            } else {
                res.status(404).json({ err: "No users were found!" })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

//DELETE
router.delete("/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(deletedUser => {
            if (deletedUser) {
                res.json(deletedUser);
            } else {
                res.status(404).json({ err: "User could not be found." });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});




module.exports = router;
