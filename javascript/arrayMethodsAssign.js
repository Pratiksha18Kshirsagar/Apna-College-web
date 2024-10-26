
//Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [2, 4, 6, 8, 10];


let ssa = () => {
    let square = arr.map((el) => {
        return el ** 2;
    })

    let sum = square.reduce((res, el) => {
        return res + el;
    })

    console.log(sum / square.length);
}

// ssa();


// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5

let plus5 = arr.map((el)=>{
     return el + 5;
})
// console.log(plus5);



//  Qs3.Create a new array whose elements are in uppercase of words present in the original array

let str = ["mona" , "vaishu" , "pikabu" , "chunnu"];

let newStr = str.map((el)=>{
    return el.toUpperCase();
})

// console.log(newStr);

// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled .



let doubleAndReturnArgs = (arr ,...args )=>{
let newArr = [...arr , ...args]
  console.log(newArr);
  let doubled = newArr.map((el)=>{
    return el*2;
  })
  console.log(doubled);
}

// doubleAndReturnArgs([1,2,3,5] , 34,77,56);


// Qs5.Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

let mergeObjects = (obj1 , obj2)=>{
    let newObj = {
        ...obj1 , ...obj2
    }
       console.log(newObj);
}

mergeObjects({name:"pop" , id :90} ,{class:6, sub :"maths"});