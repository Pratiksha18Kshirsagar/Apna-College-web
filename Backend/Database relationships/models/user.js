const mongoose = require("mongoose");
const schema = mongoose.Schema;

//mongoose setup
main().then(() => console.log("connection successful")).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


//model creation
const userSchema = new schema({
    username: String,
    address: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
});


//collection created
const User = mongoose.model("User", userSchema);


//function to add data to collection
const addUser = async () => {
    const user1 = new User({
        username: "Pratiksha",
        address: [{
            location: " 123ab Church street",
            city: "Banglore"
        }],
    })
    user1.address.push({ location: "Kotty", city: "Hyderabad" });
    user1.address.push({ location: "Amerpet", city: "Hyderabad" });
    let result = await user1.save();
    console.log(result);
}


//Function call!!
addUser();