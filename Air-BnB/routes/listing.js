const express = require("express");
const router = express.Router();
const listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema  } = require("../schema.js");
const ExpressError = require("../utils/expressError.js");


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
    res.render("./listings/show.ejs", { detaillist });
}))

//create
router.get("/new", (req, res) => {
    res.render("./listings/new.ejs");
})

router.post("/",  validateListing, wrapAsync(async (req, res) => {
    // let { title, description, price, location, country } = req.body;
    const Listing = new listing(req.body);
    // if(!req.body) {
    //     throw new Expresserror("Send Valid Listing", 400);
    // }
    await Listing.save();
    // console.log(req.body);
    res.redirect("/listings");
}))

//edit route
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id);
    if(!detaillist){
        throw new ExpressError(400 , "Id not found!")
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
    res.redirect("/listings");

}))


//delete
router.delete("/:id/delete", (req, res) => {
    listing.findByIdAndDelete(req.params.id).then((result) => { console.log("successfully updated!!"); })
    res.redirect("/listings");
})

module.exports = router;