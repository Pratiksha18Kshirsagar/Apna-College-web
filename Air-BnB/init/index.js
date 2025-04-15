const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


//mongoose connection!
main().then((res) => {
    console.log(res);
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect( "mongodb://127.0.0.1:27017/wanderLust")
}



const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=> ({
        ...obj , owner:"67fba564d77386e0d6515f2f"
    }))
    await Listing.insertMany(initData.data);
    console.log("initialized data!!")
}

initDB();