const Review = require("../models/reviews.js");
const listing = require("../models/listing.js");

module.exports.createReview =  async(req,res)=>{
    console.log(req.params.id);
  let listing1 =   await listing.findById(req.params.id);
  let review = new Review(req.body);
  review.author = req.user._id;
  console.log(review);
  listing1.reviews.push(review);
  await review.save();
  await listing1.save();
//   console.log("review");
req.flash("success" , "New Review Created!!")
res.redirect(`/listings/${listing1._id}/show`);

}


module.exports.destroyReview = async (req,res)=>{
    let{id , reviewId} = req.params;
    await listing.findByIdAndUpdate(id ,{$pull : {reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success" , "Review Deleted!!")
    res.redirect(`/listings/${id}/show`);
}