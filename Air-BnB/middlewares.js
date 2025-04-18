const Listing = require("./models/listing");
const Review = require("./models/reviews.js");
const { listingSchema ,reviewSchema  } = require("./schema.js");
const ExpressError = require("./utils/expressError.js");



module.exports.isLoggedIn = (req,res,next)=>{
    // console.log(req.path , ".." , req.originalUrl);
    // console.log(req.user);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        console.log(req.session.redirectUrl);
        console.log(req.originalUrl);
        req.flash("error" , "You must be logged in to access this page!!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res , next)=>{
    if(req.session.redirectUrl){
     res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let{id} = req.params;
    console.log(id);
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser)){
        req.flash("error" , "You are not permitted to this☹️");
        return res.redirect(`/listings/${id}/show`);
    }
    next();
}

module.exports.isReviewAuthor = async(req,res,next)=>{
    let{id , reviewId} = req.params;
    console.log(id);
    let review =await Review.findById(reviewId);
    console.log(res.locals.currUser);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error" , "You are not the author to this☹️");
        return res.redirect(`/listings/${id}/show`);
    }
    next();
}




//listing vaidation!!
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    // console.log(error.details)
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};

//review validation
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    // console.log(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else{
        next();
    }
};
