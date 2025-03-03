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

// app.get("/search",(req,res)=>{
//     res.send("We are in search page");
//     })
//  app.get("/apple",(req,res)=>{
//     res.send("We are in apple page");
//      })

//  app.get("*",(req,res)=>{
//     res.send("the path doest not exist!!!");
//     })

app.get("/ig/:userName/:id" , (req,res) =>{
    let  {userName , id} = req.params ;
    console.log(userName , id);
    res.send(`welcome to ${userName} ${id} page`)
})

app.get("/Search" , (req,res)=>{
    let {q} = req.query;
    if(!q){
       res.send("No search query");
    }
    res.send(`These are the results for : ${q}`);
});
