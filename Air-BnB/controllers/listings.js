const listing = require("../models/listing.js");

//index route
module.exports.index = async (req, res) => {
    const allListings = await listing.find();
    res.render("./listings/index.ejs", { allListings });
}



//show route
module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id).populate({path:"reviews" , populate:{path:"author"}} ).populate("owner");
    // console.log(detaillist);
    if(!detaillist){
        req.flash("error" , "Listings does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { detaillist });
}

//newform add
module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new.ejs");
}

//create
module.exports.createListings = async (req, res) => {
    // let { title, description, price, location, country } = req.body;
    const Listing = new listing(req.body);
    Listing.owner = req.user._id;
    await Listing.save();
    req.flash("success" , "New listings Created!!")
    res.redirect("/listings");
}

//edit form
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id);
    if(!detaillist){
        req.flash("error" , "Listings does not exist!");
        res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { detaillist });
}

//updateform
module.exports.updateListings = async (req, res) => {
    await listing.findByIdAndUpdate(req.params.id, req.body);
    req.flash("success" , "Listings Updated!!");
    res.redirect("/listings");

}

//delete
module.exports.destroyListings = async(req, res) => {
    await listing.findByIdAndDelete(req.params.id);
    req.flash("success" , "Listings Deleted!!")
    res.redirect("/listings");
}