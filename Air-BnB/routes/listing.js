const express = require("express");
const router = express.Router();
const listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema  } = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const {isLoggedIn} = require("../middlewares.js");


//listing vaidation!!
const validateListing = (req, res, next) => {
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


//index route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await listing.find();
    res.render("./listings/index.ejs", { allListings });
}))



//show route
router.get("/:id/show", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id).populate("reviews");
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
    await Listing.save();
    req.flash("success" , "New listings Created!!")
    res.redirect("/listings");
}))

//edit route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id);
    if(!detaillist){
        req.flash("error" , "Listings does not exist!");
        res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { detaillist });
}))

//edit patch
router.patch("/:id", validateListing, wrapAsync(async (req, res) => {
    // console.log(req.body);
    // if (!req.body) {
    //     throw new ExpressError(400, "Send Valid Listing",);
    // }
    await listing.findByIdAndUpdate(req.params.id, req.body);
    req.flash("success" , "Listings Updated!!");
    res.redirect("/listings");

}))


//delete
router.delete("/:id/delete",isLoggedIn, (req, res) => {
    listing.findByIdAndDelete(req.params.id).then((result) => { console.log("successfully updated!!"); })
    req.flash("success" , "Listings Deleted!!")
    res.redirect("/listings");
})

module.exports = router;