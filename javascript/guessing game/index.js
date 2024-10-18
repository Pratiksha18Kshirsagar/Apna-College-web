let user = prompt("Enter the max number")
let randomNumber = Math.floor(Math.random()*user)+1;

while (true) {
    let userNum = prompt("Guess the number");
    
    if (userNum == randomNumber) {
        console.log("Congratualtions and celebrations!!");
        break;
    }
    else if(userNum == "Quit"){
        break;
    }
    else{
        
        if(randomNumber > parseInt(userNum)){
            console.log("Choose greater number");
        }
        else if(userNum > parseInt(user)){
            console.log("Your max number is " , parseInt(user));
        }
        else{
            console.log("Choose smaller number");
        }
    }
    
}
