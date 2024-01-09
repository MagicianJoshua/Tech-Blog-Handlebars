const router = require("express").Router();
const User = require("../../models/User");

router.post("/signup", async (req,res) => {
    try {
        const data = await User.create(req.body);

        req.session.save(() =>{ //This function logs the person in after signing up.
            req.session.logged_in = true;
            req.session.user_id = data.id;
        })

        res.status(200).json(data);
    }   
    catch (err) {
        res.status(400).json(err);
    }
});

router.post("/login", async (req,res) => {
    try {
        const data = await User.findOne({
            where:{
                email:req.body.email
            }});

        if (!data) {
            res.status(404).json({message:"User not found"});
            return
        }

        const validPass = await data.checkPassword(req.body.password);

        if (!validPass) {

            res.status(400).json({message:"Incorrect email of password, please try again"});
            return
            
        };

        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = data.id;
            res.json({user:data, message:"You are now logged in!"});
        })
    }
    catch (err) {
        res.status(400).json(req.body);
    }
})





module.exports = router;