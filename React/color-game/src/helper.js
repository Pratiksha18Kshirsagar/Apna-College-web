 function GenColors(){
    let arr =new Array(3);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random()*100);
    }
    
    return arr;
}

function rgbColor(arr){
    arr.map((e)=>{
     return  num =  e.toString();
    })
    let rgb = `rgb${num}`;
    console.log(rgb);
    return rgb
}


 


export {GenColors , rgbColor};