let arr =[20,3,24,30,90,55];

let mulOften = arr.every((el) =>{
       return el%10 == 0 ; 
})

// console.log(mulOften);


let arr1 =[20,3,24,30,90,55];

let minEl = arr1.reduce((min , el)=>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }

})

console.log(minEl);