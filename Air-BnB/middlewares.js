module.exports.isLoggedIn = (req,res,next)=>{
    // console.log(req.path , ".." , req.originalUrl);
    // console.log(req.user);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        console.log(req.session.redirectUrl);
        console.log(req.originalUrl);
        req.flash("error" , "You must be logged in to access this page!!");
        res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res , next)=>{
    if(req.session.redirectUrl){
     res.locals.redirectUrl = req.session.redirectUrl;
    }
   
    next();

}