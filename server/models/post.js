const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  posttitle: { type: String },
  postcontent: { type: String },
  postlikes: { type: String }
}) 
// 3. create model of schema
const post = mongoose.model("post", postSchema);
// 4. create CRUD functions on model
//CREATE a post
async function createpost(id, posttitle, postcontent) {
  const newpost = await post.create({
    userID: id,
    posttitle: posttitle,
    postcontent: postcontent,
    postlikes: 0
  });
  return newpost;

}
// UPDATE
async function updatepost(id, postcontent) {
  const post = await post.updateOne({ "_id": id }, { $set: { postcontent: postcontent } });
  return post;

}
//DELETE
async function deletepost(id) {
  await post.deleteOne({ "_id": id });
}

// GET post
async function getpost(id) {
  return await post.findOne({ "_id": id });
}

// GET post
async function getUserPosts(id) {
  const data = await post.find({ "userID": id });
  return JSON.parse(JSON.stringify(data));
}

module.exports = { createpost, updatepost, deletepost, getpost, getUserPosts };