const express = require("express");
const app = express();
const port = 3000;

app.get("/register" , (req,res)=>{
    let {user , password} = req.query;
    res.send("standard get request");
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
 
app.post("/register" , (req,res)=>{
    console.log(req.body);
    res.send("standard post request");
})

app.listen(port , ()=>{
console.log(`App is listening to the response:${port}`)
})