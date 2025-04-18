const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js")
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middlewares.js")

router.route("/signup")
.get(userController.renderSignup)//get signup form
.post(wrapAsync(userController.signup));
//add signup data to db 

router.route("/login")
.get(userController.renderLoginForm)//logIn get method
.post(
   saveRedirectUrl,
   passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
   userController.login,
);

//logout
router.get("/logout",userController.logout )

module.exports = router;