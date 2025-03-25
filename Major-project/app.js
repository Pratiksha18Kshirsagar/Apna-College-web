//require the packages!
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const listing = require("./models/listing.js")

//ejs setup!
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));


//mongoose connection!
main().then((res) => {
    console.log(res);
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust")
}


//start server!
app.listen(8080, () => {
    console.log("server is listening on port 8080!!");
})


//root route!
app.get("/", (req, res) => {
    res.send("i m root !!");
})


//index route
app.get("/listings", async (req, res) => {
    const allListings = await listing.find();
    res.render("./listings/index.ejs", { allListings });
})





//show route
app.get("/listings/:id/show", async (req, res) => {
    let { id } = req.params;
    const detaillist = await listing.findById(id);
    console.log(detaillist);
    res.render("./listings/show.ejs", { detaillist });
})

//create
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
})

app.post("/listings", async (req, res) => {
    // let { title, description, price, location, country } = req.body;
    const Listing = new listing(req.body);
    await Listing.save();
    console.log(req.body);
    res.redirect("/listings");
})

app.get("/listings/:id/edit", (req, res) => {
    let { id } = req.params;
    res.render("./listings/edit.ejs", { id });
})