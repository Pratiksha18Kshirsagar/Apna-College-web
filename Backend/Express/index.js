const express = require("express");
const app =express();

const port = 3000;

app.listen(port , ()=>{
    console.log(`App is listening on port ${port}.`);
})

// app.use((req , res) =>{
//     console.log("req recived")
//     // console.log(req);
//     res.send("This is a basic response!!");
// })

app.get("/home",(req,res)=>{
res.send("We are in home page");
})

app.get("/search",(req,res)=>{
    res.send("We are in search page");
    })
 app.get("/apple",(req,res)=>{
    res.send("We are in apple page");
     })

    app.get("*",(req,res)=>{
        res.send("the path doest not exist!!!");
        })