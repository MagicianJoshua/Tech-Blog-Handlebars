const router = require("express").Router();
const {Post,Comment,User} = require("../../models/index.js")

router.post("/signup", async (req, res) => {
  try {
    const data = await User.create(req.body);
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!data) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const validPass = await data.checkPassword(req.body.password);

    if (!validPass) {
      res
        .status(400)
        .json({ message: "Incorrect email of password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = data.id;
      req.session.user_name = data.name
      res.json({ user: data, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(req.body);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/post", async (req,res) => {
    try {
        const data = await Post.create(req.body);
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json(err);
      }
})


router.post("/comment", async (req,res) => {
    try {
        
        const data = await Comment.create(req.body);
        console.log(data)
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json(err);
      }
})

router.delete('/deletePost', async (req,res) => {
  
    const data = await Post.findByPk(req.body.id)
    data.destroy();
    
    res.json("Comment deleted");
  })

module.exports = router;
