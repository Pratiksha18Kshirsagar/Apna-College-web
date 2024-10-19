function dice() {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum);
}

// dice();


function avg(a, b, c) {
    let avgNum = (a + b + c) / 3;
    console.log(avgNum);
}

// avg(10,10,10);


function mul(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${a}*${i}=${a * i}`);
    }
}
// mul(10);

function sum(a) {
    let sumNum = 0;
    for (let i = 1; i <= a; i++) {
        sumNum = sumNum + i;
    }
    console.log(sumNum);
}

// sum(4);



let arr = ["Momo", "Soup", "Chowmein", "Manchurian"];


function concat(arr) {
    let arrConcat = "";
    for (let i = 0; i < arr.length; i++) {
        arrConcat = arrConcat + arr[i];
    }
    return arrConcat;
}
let str = concat(arr);
console.log(str);


let Name = function(a){
    return a;
}
console.log(Name("mona"));


let odd = function(n){
    console.log(!(n%2 == 0));
}

odd(7);