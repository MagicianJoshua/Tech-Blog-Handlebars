const router = require("express").Router();
const withAuth = require("../utils/authentication");
const Post = require("../../models/Post")
const Comment = require("../../models/Comment")
const User = require("../../models/User")


router.use((req, res, next) => {
  res.locals.logged_in = req.session.logged_in;
  next();
});

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({include:{model:User}});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts: posts,
    });
    }
   catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {

    const postData = await Post.findAll({where:{user_id:req.session.user_id}, include:{model:User}});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("profile", {
      posts: posts,
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id" , async (req,res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {include:{model:User}})
        const post = postData.get({plain:true})

        const commentData = await Comment.findAll(
            {where:{
                post_id:req.params.id
            },
            include:{
                model:User
            }} )
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        let author;
        if (post.user.id === req.session.user_id){
            author = true
        } else {
            author = false
        }
        console.log(post)
        console.log(author)
        res.render("post", {
            post:post,
            comments:comments,
            userId:req.session.user_id,
            author:author,
        })
    }
    catch (err) {
        res.status(500).json(err);
    }

})


router.get("/makePost", withAuth, async (req,res) =>{
    try {
        res.render("makePost",
        {
            userId:req.session.user_id
        });
    }
    catch(err) {
        res.status(500).json(err);
    }
    
})

module.exports = router;
