const mongoose = require('mongoose');

// Define the Post schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model of schema
const Post = mongoose.model('Post', postSchema);

// Function to create a new post with the User ID
async function createPost(title, content, userId) {
    const newPost = new Post({
      title,
      content,
      author: userId // Associate the User ID with the post
    });
    await newPost.save();
    return newPost;
  }
  
  // Function to read a post by User ID and Post ID
  async function readPost(userId, postId) {
    const post = await Post.findOne({ _id: postId, author: userId });
    return post;
  }
  
  // Function to update a post by User ID and Post ID
  async function updatePost(userId, postId, title, content) {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId, author: userId },
      { title, content },
      { new: true }
    );
    return updatedPost;
  }
  
  // Function to delete a post by User ID and Post ID
  async function deletePost(userId, postId) {
    await Post.findOneAndDelete({ _id: postId, author: userId });
  }

  module.exports = {
    createPost,
    readPost,
    updatePost,
    deletePost
  };