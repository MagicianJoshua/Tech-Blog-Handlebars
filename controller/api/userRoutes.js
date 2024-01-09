const router = require("express").Router();
const User = require("../../models/User");
const withAuth = require("../../utils/authentication")
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

module.exports = router;
