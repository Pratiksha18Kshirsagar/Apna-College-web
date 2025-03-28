const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image:
    {
        type: String,
        set: (v) => v === "" ? "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" : v
    },
    price: Number,
    location: String,
    country: String,
})



const Listing = new mongoose.model("Listing", listingSchema);

module.exports = Listing;
