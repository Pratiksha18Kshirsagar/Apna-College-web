let task = [];
let input = prompt("Enter the option");
while (true) {
    
    if (input == "add") {
        let taskAdd = (prompt("Enter your task")); 
        task.push(taskAdd);
        console.log("Task added")
       
    }
    else if (input == "list") {
        // for (let i = 0; i < task.length; i++) {
        //     console.log(task[i]);
        // }
        for (let item of task) {
            console.log(item);
            
        }
    }
    else if (input == "delete") {
        for (let i = 0; i < task.length; i++) {
            console.log(i, task[i]);
        }
        let del = prompt("Enter index that needs to be deleted ");
        task.splice(del, 1);
    }
    else if (input == "quit") {
        break;
    }
    else {
        alert("Choose a valid option !!")
    }
    input = prompt("Enter the option");
}

