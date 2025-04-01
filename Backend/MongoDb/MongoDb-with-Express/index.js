const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const methodOverride = require("method-override");
const Chat = require("./Models/chat");
const expresserror = require("./ExpressError");


app.use(methodOverride("_method"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }))



//mongoose
main().then(() => {
    console.log("Connection successful!")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsApp');
}


//restFull APIs
app.get("/", (req, res) => {
    res.send("Root is working!!");
})

//home
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats })
})




//add new
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})



app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    })

    console.log(newChat);

    newChat.save().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/chats");
})

//asyncWrap
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => {
            next(err);
        });
    }
}

//show route
app.get("/chats/:id", asyncWrap(async (req, res ,next) => {
    let { id } = req.params;
    let chat = await Chat.findById(`${id}`);
    if (!chat) {
        next(new expresserror(500, "chat not found"));
    }
    res.render("edit.ejs", { chat });
}));



//update
app.get("/chats/:id/edit",asyncWrap( async (req, res , next) => {
    let { id } = req.params;
    let chat = await Chat.findById(`${id}`);
    console.log(chat);
    res.render("edit.ejs", { chat });
}))


app.patch("/chats/:id",  (req, res) => {
    let { id } = req.params;
    console.log(id);
    let { msg } = req.body;
    console.log(msg);
    Chat.updateOne({ _id: `${id}` }, { msg: msg }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
})


//delete
app.delete("/chats/:id/delete", asyncWrap( async (req, res , next) => {
    let { id } = req.params;
    console.log(id);
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats");
}))



app.use((err, req, res, next) => {
    let { status = 402 , message = "Page not found" } = err;
    res.status(status).send(message);
})

//server started!!
app.listen(8080, () => {
    console.log("Server is listening on port 8080!!")
})

