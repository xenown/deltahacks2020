const express = require('express');

const router = express.Router();
const Post = require('../Models/posts');


router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});   

//submits a post
router.post('/', async (req, res) => {
    //console.log(req.body);
    const post = new Post({
    /*    title: req.body.title,
        name: req.body.name,
        description: req.body.description  */
        Survey: req.body.Survey,

    name: req.body.name,

    Question1: req.body.Question1,
    Question2: req.body.Question2,
    Question3: req.body.Question3,
    Question4: req.body.Question4,
    Question5: req.body.Question5,
    Question6: req.body.Question6,
    Question7: req.body.Question7,
    Question8: req.body.Question8,
    Question9: req.body.Question9,
    Question10: req.body.Question10,
    Question11: req.body.Question11,
    Question12: req.body.Question12,
    Company: req.body.Company,
    

    });
    //console.log(post);
    try {
        const savedPost = await post.save();
        res.json(savedPost);
        
    } 
    catch (err){
        res.json({ message: err});
    }
});
  /*  post.save()
        .then( data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err })
        }); 
*/


//specific get
router.get('/:postId', async (req, res) => {
    try {
        const specific_post = await Post.findById(req.params.postId);
        res.json(specific_post);
        //console.log(req.params.postId);
    }
    catch (err){
        res.json({ message: err});
    }
});



module.exports = router;