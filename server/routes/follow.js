const express = require('express');
const router = express.Router();
const { createFollow, readFollow, updateFollow, deleteFollow } = require('../models/follow');

 
router.post('/follows', async (req, res) => {
  try {
    const { following_id, follower_id } = req.body;
    const newFollow = await createFollow(following_id, follower_id);
    res.status(201).json(newFollow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/follows/:follow_id', async (req, res) => {
  try {
    const { follow_id } = req.params;
    const follow = await readFollow(follow_id);
    if (!follow) {
      return res.status(404).json({ message: 'Follow not found' });
    }
    res.json(follow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.put('/follows/:follow_id', async (req, res) => {
  try {
    const { follow_id } = req.params;
    const { newFollowingId } = req.body;
    const updatedFollow = await updateFollow(follow_id, newFollowingId);
    if (!updatedFollow) {
      return res.status(404).json({ message: 'Follow not found' });
    }
    res.json(updatedFollow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/follows/:follow_id', async (req, res) => {
  try {
    const { follow_id } = req.params;
    const result = await deleteFollow(follow_id);
    if (!result) {
      return res.status(404).json({ message: 'Follow not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
