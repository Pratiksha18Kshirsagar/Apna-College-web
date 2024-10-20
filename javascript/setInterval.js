// let id =setInterval(() => {
//     console.log("Pratiksha Kshirsagar!!")
// },2000 );


// let id3 =setInterval(() => {
//     console.log(" Kshirsagar!!")
// },4000 );

// clearInterval(id);



// let id = setInterval(() => {
//     console.log("hello world!!")

// }, 2000);




// setTimeout(() => {
//     clearInterval(id)
//     console.log("Clear interval!!")
// }, 12000);



let arr = [34, 55, 66, 2, 1, 3, 4];
let arrAverage = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    return sum / arr.length;

}

// console.log(arrAverage());

let isEven = n => {
    if (!(n % 2 == 0)) {
        return "Odd"
    } else {
        return "Even"
    }
}
// console.log(isEven(8));

let length = 5;

function callback() {
    console.log(this.length)
}

const object = {
    length: 5,
    method(callback) {
        callback();
    }
};
object.method(callback);