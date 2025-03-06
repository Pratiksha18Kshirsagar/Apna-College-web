// Factory function!!

// function PersonDetails(name, age) {
//     let person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hii my name is : ${name}`);
//         }
//     }
//     return person;
// }

// let obj1 = PersonDetails("pratiksha" , 10);
// let obj2 = PersonDetails("pratik" , 15);
// console.log(obj1);
// console.log(obj2);
// console.log(obj1.talk === obj2.talk);


//New Operator

// function PersonDetails(name, age) {
//     this.name = name;
//     this.age = age;
// }
// PersonDetails.prototype.talk = function () {
//     console.log(`Hii my name is : ${this.name}`);
// }
// let obj1 = new PersonDetails("pratiksha" , 10);
// let obj2 = new PersonDetails("pratik" , 15);
// console.log(obj1.talk === obj2.talk);

//classes -constructor
class PersonDetails{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
    talk(){
        console.log(`Hi my name is ${this.name}`);
    }
}

let obj1 = new PersonDetails("pratiksha" , 10);
let obj2 = new PersonDetails("pratik" , 15);
console.log(obj1.talk === obj2.talk);