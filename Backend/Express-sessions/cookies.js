const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/", (req, res) => {
    console.log(req.cookies);
    res.send("I am root");
})

app.get("/setcookies", (req, res) => {
    res.cookie("greet", "namaste");
    res.cookie("origin", "India" , {signed:true});
    res.send("We sent you cookie!!")
})

app.get("/greet" , (req,res)=>{
    res.send(`Hello , ${req.cookies.name}`)
})

app.get("/verify" , (req,res)=>{
    console.log(req.cookies);
})

app.listen(8080, () => {
    console.log("Server is running on 8080");
});
