const User = require("../models/user");



module.exports.renderSignup =  (req, res) => {
    res.render("user/signup.ejs")
 }


module.exports.signup = async (req, res) => {
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
}


module.exports.renderLoginForm =   (req, res) => {
    res.render("user/login.ejs");
 }

 module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to wanderlust!!🎉");
    // console.log(res.locals);
    let redirectUrl = res.locals.redirectUrl || "/listings"
    console.log(redirectUrl);
    res.redirect(redirectUrl);
 }

 module.exports.logout = (req, res, next) => {
    req.logout((err) => {
       if (err) {
          return next(err);
       }
       else {
          req.flash("success", "You are successfully logged out😁");
          res.redirect("/listings");
       }
    })
 }