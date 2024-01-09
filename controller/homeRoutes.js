const router = require("express").Router();
const withAuth = require("../utils/authentication")

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

router.get("/login", async (req,res) => {

    try {
        res.render("login")
    } catch (err) {
        res.status(500).json(err);
    }

}) 

router.get("/signup", async (req,res) => {

    try {
        res.render("signup")
    } catch (err) {
        res.status(500).json(err);
    }

}) 

router.get("/profile", withAuth, async (req,res) => {
    try {
        res.render("profile")
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;
