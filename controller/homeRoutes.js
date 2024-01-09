const router = require("express").Router();
const withAuth = require("../utils/authentication");
const Post = require("../models/Post");
const Comment = require("../models/Comment")
const User = require("../models/User");

router.use((req, res, next) => {
  res.locals.logged_in = req.session.logged_in;
  next();
});

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response

  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
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

    const postData = await Post.findAll({where:{user_id:req.session.user_id}});
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("profile", {
      user_name: req.session.user_name,
      posts: posts,
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id" , async (req,res) => {
    try {
        const postData = await Post.findByPk(req.params.id)
        const post = postData.get({plain:true})
        console.log(post)

        const userData = await User.findByPk(post.user_id);
        const user = userData.get({plain:true});
        console.log(user)

        res.render("post", {
            post:post,
            user:user,
        })
    }
    catch (err) {
        res.status(500).json(err);
    }

})

module.exports = router;
