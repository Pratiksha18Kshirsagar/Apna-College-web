const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chatSchema = new schema({
    from: {
        type: String,
        required: true
    },
    to:{
        type:String,
        required: true
    },
    msg:{
        type:String,
        maxLength : 50
    },
    created_at:{
        type:Date,
        // required:true
    },
})


//default collection chats will be created!!
const Chat = mongoose.model("Chat" , chatSchema);

module.exports = Chat;