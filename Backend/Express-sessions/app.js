const express = require("express");
const session = require("express-session");
const flash = require('connect-flash');
const app = express();
const path = require("path");

app.use(flash());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const sessionOptions = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: false } // must be false when testing over HTTP
}

app.use(session(sessionOptions));

app.use((req,res , next)=>{
    res.locals.successmsg = req.flash("success");
    res.locals.errormsg = req.flash("error");
    next();
})

app.get("/", (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;
        res.send("Welcome! Session started.");
    } else {
        req.session.views++;
        res.send(`You visited this page ${req.session.views} times`);
    }
});

app.get("/register", (req, res) => {
    let { name = " Anonymous" } = req.query;
    req.session.name = name;
    if (name === " Anonymous") {
        req.flash("error", "user not registered");
    } else {
        req.flash('success', 'User registered successfully');
    }
    res.redirect("/hello");
})

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
})






app.listen(3000, () => {
    console.log("Server is running on 3000");
});
