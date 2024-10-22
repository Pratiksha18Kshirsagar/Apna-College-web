let arr = [1,2,4,3,11,22,33,23,13,123];

// console.log(...arr);
// console.log(arr);

// console.log(Math.min(...arr));
// console.log(Math.max(...arr));




//spread with string , array literals
let even = [2,4,6,8];
let odd = [1,3,5,7];

let newArr = [...even , ...odd];
// console.log(newArr);

let str = "pratiksha"
// console.log([...str]);

let obj = {
    email:"pk@gmail.com",
    name:"pratiksha p"

}

let newObj = {
    ...obj ,
    age:90,
    id:900,
    place:"Karnataka"
}

console.log(newObj)

