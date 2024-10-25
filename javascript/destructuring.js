let names = ["Mona" , "Vaishu" , "Sona" , "Meenu" , "Piku" , "Pika" ];


// Without destructuring

// let winner = names[0];
// let runnerup = names[0];
// let secondRunnerUp = names[0];



// with destructing

let [winner , runnerUp , secondRunnerUp, ...others] = names;

console.log(winner);
console.log(runnerUp);
console.log(secondRunnerUp);
console.log(others);