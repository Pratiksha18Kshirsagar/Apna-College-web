let genNum = (n) => {
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

let sum = (arr)=>{
  let ticketSum =  arr.reduce((num , next)=>{
        return num + next ; 
    })
    return ticketSum;
}

export  {genNum , sum}