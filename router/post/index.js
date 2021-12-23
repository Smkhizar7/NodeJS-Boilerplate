const express = require("express");
const router = express.Router();
const Post = require('../../models/post');
const jwt = require('jsonwebtoken');


router.post("/add-post", (req, res) => {
    try {
        var verify = jwt.verify(req.headers.token, 'SAYLANI');
        let new_post = new Post(req.body)
        new_post.save()
            .then(() => {
                res.send({ msg: "Post added hogai", new_post })
            })
    } catch (err) {
        res.send(400, { msg: "Invalid" })
    }
})

router.get("/get-posts", (req, res) => {
    try {
        var verify = jwt.verify(req.headers.token, 'SAYLANI');
        Post.find({})
            .then((data) => {
                res.send({ msg: "Posts mil gai", data })
            })
    } catch (err) {
        res.send(400, { msg: "Invalid" })
    }
})

module.exports = router;