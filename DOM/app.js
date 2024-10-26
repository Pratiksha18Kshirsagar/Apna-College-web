let para = document.getElementById("description");
// console.log(para);

// To acess any node in the document in the object form. use "dir"
console.dir(para);


let img = document.getElementsByClassName("oldImg");

console.log(img);

 for (let i = 0; i < img.length; i++) {
    img[i].src = "assets/spiderman_img.png"
    console.dir(img[i].src);
    
 }