
const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
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

// Create a Post model
const Post = mongoose.model('Post', postSchema);

// CRUD operations

// Create a new post
const createPost = async (postId, userId, title, content) => {
  const post = new Post({
    postId,
    userId,
    title,
    content
  });
  await post.save();
};

// Read a post by postId and userId
const readPost = async (postId, userId) => {
  const post = await Post.findOne({ postId, userId }).populate('userId');
  return post;
};

// Update an existing post by postId and userId
const updatePost = async (postId, userId, updateData) => {
  const post = await Post.findOneAndUpdate(
    { postId, userId },
    updateData,
    { new: true }
  );
  return post;
};

// Delete a post by postId and userId
const deletePost = async (postId, userId) => {
  const post = await Post.findOneAndDelete({ postId, userId });
  return post;
};

module.exports = {
  Post,
  createPost,
  readPost,
  updatePost,
  deletePost
};
