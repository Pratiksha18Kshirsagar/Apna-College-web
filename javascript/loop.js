// for (let i = 2; i<=20; i=i+2) {
//     console.log(i);   
// }

// for (let i = 1; i <=3; i++) {
//     console.log("outer loop")
//     for (let j = 1; j<=3; j++) {
//         console.log(j)   
//     }   
// }



// let fruits = [["mango" , "orange" , "litchi"],["kiwi" , "guava" , "blueberry"]];

// for(let i=0 ; i<fruits.length ; i++){
//     console.log(i,fruits[i]);
//     for(j=0 ;j<fruits[i].length ; j++){
//         console.log(j, fruits[i][j]);
//     }
// }


let students = [["Pratikhsa" , 90] ,["Prachi" , 80] , ["Shubho" , 100] , ["Piyu" , 89]];

for(let i=0 ; i<students.length ; i++){
    console.log(` info of  ${i+1} student `);
    for(let j = 0 ; j < students[i].length ; j++){
        console.log(j+1 , students[i][j]);
    }

}