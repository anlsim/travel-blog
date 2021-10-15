const express = require('express')
const router = express.Router()
const User = require("../models/User");
const Post = require("../models/Post");


//CREATE NEW
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//EDIT POST
router.put("/:id", async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
                try{
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                        $set:req.body
                    }, {new: true}
                );
                res.status(200).json(updatedPost);
                }catch(err){
                    res.status(500).json(err);
                }
            }
            else{
                res.status(401).json("You cant update this!")
            }
        }catch(err){
        res.status(500).json(err);
    }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You only delete your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET USER

router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL POST
  //GET ALL POSTS
router.get("/", async (req, res) => {
    const userId = req.query.userId;
    const stateName = req.query.state;
    try {
      let posts;
      if (userId) {
        posts = await Post.find({userId });
      } else if (stateName) {
        posts = await Post.find({
          states: {
            $in: [stateName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;