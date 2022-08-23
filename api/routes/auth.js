const router = require("express").Router();
const User = require("../models/User.js"); //madatory to add .js unlike react
const bycrpt = require("bcrypt");
//REGISTER
router.post("/register", async (req, res) => {
  //req to server, res from the server
  try {
    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error); //something wrong with db or server
  }
});

//login
router.post("/login", async (req, res) => {
  //req to server, res from the server
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(400).json("Wrong details");
    }
    const validated = await bycrpt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json("Wrong details");
    }
    //we should not show even our hashed password with the user
    // res.status(200).json(user);
    const { password, ...other } = user._doc; // all over key value will be in user._doc
    res.status(200).json(other);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
