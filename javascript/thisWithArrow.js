const student = {
    name:"Pratiksha" , 
    marks: 100,
    prop:this ,//global scope 
    getName : function(){
        console.log(this);//student
        console.log(this.name);//Pratiksha

    },
    getMarks:()=>{
        console.log(this);//parent scope - window - arrow - > global window
        console.log(this.marks);// undefined
    }
}

// console.log(student);