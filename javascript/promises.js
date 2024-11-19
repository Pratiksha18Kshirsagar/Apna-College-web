function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(Math.random() * 10) + 1;
        if (internetspeed > 4) {
            resolve("success:data saved!");
        }
        else {
            reject("failure:data not saved!")
        }
    })
}
savetoDb("Pratiksha")
.then((result) => {
    console.log("data1 is saved");
    console.log("result :" , result);
    return savetoDb("data2")

}).then((result) => {
    console.log("data2 saved")
    console.log("result :" , result);
    return savetoDb("data3")
}).then(() => {
    console.log("data3 saved")
    console.log("result :" , result);
})
    .catch((error) => {
        console.log("data1 is not saved")
        console.log("error :" , error);
    })


