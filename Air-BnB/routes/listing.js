const express = require("express");
const router = express.Router();
const listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner , validateListing} = require("../middlewares.js");





//index route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await listing.find();
    res.render("./listings/index.ejs", { allListings });
}))



//show route
router.get("/:id/show", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id).populate({path:"reviews" , populate:{path:"author"}} ).populate("owner");
    // console.log(detaillist);
    if(!detaillist){
        req.flash("error" , "Listings does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { detaillist });
}))

//create
router.get("/new", isLoggedIn,  (req, res) => {
    res.render("./listings/new.ejs");
})

router.post("/",  validateListing, wrapAsync(async (req, res) => {
    // let { title, description, price, location, country } = req.body;
    const Listing = new listing(req.body);
    Listing.owner = req.user._id;
    await Listing.save();
    req.flash("success" , "New listings Created!!")
    res.redirect("/listings");
}))

//edit route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id);
    if(!detaillist){
        req.flash("error" , "Listings does not exist!");
        res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { detaillist });
}))

//edit patch
router.patch("/:id", validateListing,isOwner, wrapAsync(async (req, res) => {
    await listing.findByIdAndUpdate(req.params.id, req.body);
    req.flash("success" , "Listings Updated!!");
    res.redirect("/listings");

}))


//delete
router.delete("/:id/delete",isLoggedIn,isOwner, (req, res) => {
    listing.findByIdAndDelete(req.params.id).then((result) => { console.log("successfully updated!!"); })
    req.flash("success" , "Listings Deleted!!")
    res.redirect("/listings");
})

module.exports = router;