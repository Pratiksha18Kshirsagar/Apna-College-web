const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`App is listening to the port : ${port}`);
})

let posts = [
    {
        id: uuidv4(),
        userName: "Pratiksha",
        content: "This is my first post using express👧🏻"
    },
    {
        id: uuidv4(),
        userName: "ApnaCollege",
        content: "HardWork is important to achieve success!!👦🏻"
    },
    {
        id: uuidv4(),
        userName: "Girish",
        content: "Pratiksha is improving , Bravoo.. Keep it up 🍗"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let { userName, content } = req.body;
    let id = uuidv4();
    posts.push({ id, userName, content });
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => { return id === p.id });
    console.log(post);
    res.render("show.ejs", { post });
    // res.send("working!!")
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => { return id === p.id });
    post.content = newContent;
    console.log(newContent);
    console.log(id);
    res.send("working");
})

app.get("/posts/:id/edit" , (req,res)=>{
    let  {id} = req.params;
    console.log(id);
    let post = posts.find((p) => { return id === p.id });
    console.log(post);
    res.render("edit.ejs" , {post});
})