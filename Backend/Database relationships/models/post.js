const mongoose = require("mongoose");
const schema = mongoose.Schema;

//mongoose setup
main().then(() => console.log("connection successful")).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


//model creation for user
const userSchema = new schema({
    name: String,
    email: String,
});


//model for post
const postSchema = new schema({
    content: String,
    likes: Number,
    users: {
        type: schema.Types.ObjectId,
        ref: "userSchema"
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);


const addData = async () => {
    let user1 = new User({
        name: "Vaishnavi",
        email: "tutu@gmail.com",
    })

    let post1 = new Post({
        content: "Hello world!",
        likes: 30,
    })
    post1.users = user1;
    await user1.save();
    let res = await post1.save();
    console.log(res);
}

addData();