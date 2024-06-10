const express = require('express');
const router = express.Router();
const Post= require('../models/post');

// Route to create a new post
router.post('/posts', async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const post = await Post.createPost(title, content, userId);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to read a post by User ID and Post ID
router.get('/posts/:userId/:postId', async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const post = await Post.readPost(userId, postId);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a post by User ID and Post ID
router.put('/posts/:userId/:postId', async (req, res) => {
  try {
    const { userId, postId } = req.params;
    const { title, content } = req.body;
    const updatedPost = await Post.updatePost(userId, postId, title, content);
    if (updatedPost) {
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to delete a post by User ID and Post ID
router.delete('/posts/:userId/:postId', async (req, res) => {
  try {
    const { userId, postId } = req.params;
    await Post.deletePost(userId, postId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
