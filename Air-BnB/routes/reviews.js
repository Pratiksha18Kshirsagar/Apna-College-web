const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js")
const { reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const Review = require("../models/reviews.js");
const listing = require("../models/listing.js");

//review validation
const validateReview = (req, res, next) => {
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

//review post route
router.post("/" ,validateReview,wrapAsync( async(req,res)=>{
    console.log(req.params.id);
  let listing1 =   await listing.findById(req.params.id);
  let review = new Review(req.body);
  listing1.reviews.push(review);
  await review.save();
  await listing1.save();
//   console.log("review");
res.redirect(`/listings/${listing1._id}/show`);

}))

//delete review
router.delete("/:reviewId" , wrapAsync(async (req,res)=>{
    let{id , reviewId} = req.params;
    await listing.findByIdAndUpdate(id ,{$pull : {reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}/show`);
}))


module.exports = router;