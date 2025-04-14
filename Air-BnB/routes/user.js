const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middlewares.js")

router.get("/signup", (req, res) => {
   res.render("user/signup.ejs")
})

router.post("/signup", wrapAsync(async (req, res) => {
   try {
      let { username, email, password } = req.body;
      let newUser = new User({ username, email });
      let registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
         if (err) {
            next(err);
         }
         req.flash("success", "Welcome to wanderLust!!");
         res.redirect("/listings");
      })
      console.log(registeredUser);
   } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signUp");
   }
}))


//logIn
router.get("/login", (req, res) => {
   res.render("user/login.ejs");
})

router.post("/login",
   saveRedirectUrl,
   passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
    async (req, res) => {
      req.flash("success", "Welcome back to wanderlust!!🎉");
      // console.log(res.locals);
      let redirectUrl = res.locals.redirectUrl || "/listings"
      console.log(redirectUrl);
      res.redirect(redirectUrl);
   }
);

//logout
router.get("/logout", (req, res, next) => {
   req.logout((err) => {
      if (err) {
         return next(err);
      }
      else {
         req.flash("success", "You are successfully logged out😁");
         res.redirect("/listings");
      }
   })
})


module.exports = router;