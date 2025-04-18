//require the packages!
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require('method-override')
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStratergy = require("passport-local");
const User = require("./models/user.js"); 

const sessionOptions = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true
    }
}

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());//to give access to the session
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStratergy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//localsss res.locals (for passing data to views)
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


//ejs setup!
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride('_method'))
app.engine('ejs', ejsMate);


//mongoose connection!
main().then((res) => {
    console.log(res);
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust")
}


//start server!
app.listen(3000, () => {
    console.log("server is listening on port 3000!!");
})

//root route!
app.get("/", (req, res) => {
    res.send("i m root !!");
})


//express router for listings!
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/" ,userRouter );



app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!!"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Error Occured" } = err;
    res.status(statusCode).render("error.ejs", { message });
});