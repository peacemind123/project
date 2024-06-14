
const mongoose = require('mongoose');


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


async function createPost(title, content, userId) {
    const newPost = new Post({
      title,
      content,
      author: userId 
    });
    await newPost.save();
    return newPost;
  }
  
  
  async function readPost(userId, postId) {
    const post = await Post.findOne({ _id: postId, author: userId });
    return post;
  }
  
  
  async function updatePost(userId, postId, title, content) {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId, author: userId },
      { title, content },
      { new: true }
    );
    return updatedPost;
  }


  async function deletePost(userId, postId) {
    await Post.findOneAndDelete({ _id: postId, author: userId });
  }

  module.exports = {
    createPost,
    readPost,
    updatePost,
    deletePost
  };
