const express = require("express");
const app = express();
const ExpressError = require("./expressError.js")



//Middleware difined  (goes to non-error handling route)
app.use((req, res, next) => {
    console.log("middleware-1")
    next();

})




//Error handling
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED");  //custom error call [setting] 
})


app.get("/admin" , (req,res)=>{
    throw new ExpressError(402, "Forbidden error!!");
})

//goes to error handling route
app.use((err, req, res, next) => {
    console.log("--------------ERROR---------------");
    let { status = 500, message = "Some error" } = err;
    res.status(status).send(message);
})

app.get("/api", (req, res) => {
    res.send("data");
})










//logger-morgan
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString();
    console.log(req.method, req.path, req.hostname, req.time);
    next();
})

app.get("/", (req, res) => {
    res.send("sucess");
})

app.get("/random", (req, res) => {
    res.send("sucess -full");
})

app.listen(3000, (req, res) => {
    console.log("Server is listening on port 3000!!")
})