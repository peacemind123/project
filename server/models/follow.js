const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  follow_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true
  },
  following_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  follower_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Create the model from the schema
const Follow = mongoose.model('Follow', followSchema);

function createFollow(followingId, followerId) {
  const follow = new Follow({
    following_id: followingId,
    follower_id: followerId
  });
  return follow.save();
}

function readFollow(followId) {
  return Follow.findById(followId);
}

function updateFollow(followId, newFollowingId) {
  return Follow.findByIdAndUpdate(followId, { following_id: newFollowingId }, { new: true });
}

function deleteFollow(followId) {
  return Follow.findByIdAndRemove(followId);
}

module.exports = {
  Follow,
  createFollow,
  readFollow,
  updateFollow,
  deleteFollow
};
