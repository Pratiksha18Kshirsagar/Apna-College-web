const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner , validateListing} = require("../middlewares.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const {storage} =  require("../cloudConfig.js");
const upload = multer({ storage });



router.route("/")
.get( wrapAsync(listingController.index))//index route
.post(upload.single('image'),validateListing, wrapAsync(listingController.createListings))//addListing data to dbs


//show route
router.get("/:id/show", wrapAsync(listingController.showListings));

//create
router.get("/new", isLoggedIn, listingController.renderNewForm );

//edit route
router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));

//edit patch
router.patch("/:id",upload.single('image'), validateListing,isOwner, wrapAsync(listingController.updateListings));

//delete
router.delete("/:id/delete",isLoggedIn,isOwner, listingController.destroyListings);

module.exports = router;