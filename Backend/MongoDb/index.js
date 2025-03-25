const mongoose = require('mongoose');
main().then(() => {
    console.log("connected");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
})

const User = mongoose.model("User", userSchema);


const user1 = new User({
    name: "Adam",
    email: "adam@gmail.com",
    age: 11,
})

const user2 = new User({
    name: "eve",
    email: "eve@gmail.com",
    age: 15,
})


user2.save().then((res) => {
    console.log(res);
})
    .catch((err) => {
        console.log(err);
    })

