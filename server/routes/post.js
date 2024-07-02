const express = require('express');
const post = require('../models/post');
const router = express.Router();
router
    .get('/:id', async (req, res) => {
        try {
            let retrievedPost = await post.getpost(req.params.id);
            res.send(retrievedPost)
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .post('/', async (req, res) => {
        try {
            let createdPost = await post.createpost(req.body.id, req.body.title, req.body.content);
            res.send(createdPost)
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .put('/:id', async (req, res) => {
        try {
            let updatedPost = await post.updatepost(req.params.id, req.body.postcontent);
            res.send(updatedPost)
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .delete('/:id', async (req, res) => {
        try {
            const deletedPost = await post.deletepost(req.params.id);
            console.log('deletedPost', deletedPost);
            res.status(200).send({ message: 'Post Deleted succesfully' });
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .get('/user/:id', async (req, res) => {
        try {
            let list = await post.getUserPosts(req.params.id);
            res.send(list)
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

module.exports = router;
