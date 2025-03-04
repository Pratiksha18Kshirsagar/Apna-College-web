const express = require("express");
const app =express();
const path = require("path");

const port = 8080;

app.listen(port , ()=>{
    console.log(`App is listening on port ${port}.`);
})

app.set("view Engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));

app.get("/" , (req,res)=>{
    res.render("home.ejs");
})

app.get("/rollDice" , (req,res)=>{
    let diceval = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs" , {diceval});
})

app.use(express.static(path.join(__dirname,"public")));


app.get("/ig/:username" , (req,res)=>{
    const instaData = require("./data.json");
    console.log(instaData.cats);
    let {username} = req.params;
    let data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data } );
})