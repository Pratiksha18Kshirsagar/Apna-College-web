function sum(...args){
return args.reduce((res , el)=>{
    return res+el;
}
    
)
}

console.log(sum(3,3,33,33));