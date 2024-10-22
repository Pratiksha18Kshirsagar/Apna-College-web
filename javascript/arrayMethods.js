let arr = [1,2,3,4,5];

// arr.forEach((el) => {
//     console.log(el*10);
// });


let num = arr.map((el)=>{
return el*20;
})

// console.log(num);


let numbers = [1,2,3,4,5,6,22,13,24,34,55];

let newArr = numbers.filter((el)=>{
      return el%2 == 0;
})

// console.log(numbers);
// console.log(newArr);


// let array =[1,2,4,6,8].every((el)=>{
//       return el%2==0;
// })
// console.log(array)


let array =[1,3,,13,11,2,4,6,8].some((el)=>{
      return el%2==0;
})
// console.log(array)

let value = [1,2,3,4,5];
let sum = value.reduce((res,el)=>{
// console.log(res);
return res+el;
});
console.log(sum);


