const router = require("express").Router();
const signup = require("./signupRoutes");

router.use("/api", signup);

module.exports = router;