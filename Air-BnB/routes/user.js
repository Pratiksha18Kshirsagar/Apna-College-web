const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signUp", (req, res) => {
   res.render("user/signup.ejs")
})

router.post("/signUp", wrapAsync(async (req, res) => {
   try {
      let { username, email, password } = req.body;
      let newUser = new User({ username, email });
      let registeredUser = await User.register(newUser, password);
      req.flash("success", "Welcome to wanderLust!!")
      console.log(registeredUser);
      res.redirect("/listings");
   } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signUp");

   }
}))


//logIn
router.get("/login", (req, res) => {
   res.render("user/login.ejs");
})

router.post("/login", passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async (req, res) => {
   req.flash("success", "Welcome back to wanderlust!!🎉");
   res.redirect("/listings");

})


module.exports = router;