
// Q-1

// let arr = [1,2,3,4,2,5,2];
// let num = 2;
// for (let i = 0; i < arr.length; i++) {
//     if (num == arr[i]) {
//         arr.splice(i,1);   
//     }
// }
// console.log(arr);




// Q-2

// let number = "123456" ;
// console.log(number.length);


// Q-3

// let number = "123123";
// let sum = 0 ;
// for (let i = 0; i < number.length; i++) {
//     sum = sum + parseInt(number[i]);   
// }
// console.log(sum);

// Q-4

// let num = 5;
// let factorial = 1 ;
// for (let i = 1; i <= num; i++) {
//     if(num == 0){
//         factorial = 1;
//         break;
//     }
//     factorial = factorial*i;   
// }
// console.log(factorial);


// Q-5

let arr = [9,12,3,54,1,5,16,20,];
let value = 0 ;
for (let i = 0; i < arr.length; i++) {
    if(value < arr[i]){
        value = arr[i];
    }
}
console.log(value);