const mongoose = require('mongoose');
const Chat = require("./Models/chat");

//mongoose
main().then(() => {
    console.log("Connection successful!")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsApp');
}

let allChats = [{
    from: "Pratiksha",
    to: "Girish",
    msg: "Buy me a belgium!",
    created_at: new Date(),
},
{
    from: "Vaishu",
    to: "Girish",
    msg: "Buy me a cake!",
    created_at: new Date(),
},
{
    from: "Pratik",
    to: "tara",
    msg: "Buy me a vehicle!",
    created_at: new Date(),
},
{
    from: "Praksha",
    to: "Girisha",
    msg: "Buy me a bells!",
    created_at: new Date(),
}
]



Chat.insertMany(allChats);