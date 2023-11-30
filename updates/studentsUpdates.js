const {students} = require("../database/class");
//This is the function that will add the student
const add =(newStudent)=>{
    newStudent.id = students.length+1;
    students.push(newStudent);

    console.log("\nAdded student\n");
    console.log("\nstudents affter the adding new student\n");
    console.log(students);
}

//This is the function that will display all the students

const displayAll =()=>{
    console.log("\nAll the students\n");
    console.log(students);
}

//this is the function that will update the students
const update =(id,key,value)=>{
    var exists=students.find(ele=>ele.id===id);
    if (!exists){
        console.log("\nStudent not found\n");
    }
    else {
        exists[key]=value;
        console.log("\nStudent information is updated\n");
        console.log(exists);
    }
}

//This is the function that will update many elements to the students
const updateMany =(id,updated)=>{
var exists=students.find(ele=>ele.id===id);
if (!exists){
    console.log("\nStudent not found\n");
}
    else {
        for(key in updated){
            exists[key]=updated[key];
    
        }
        console.log("\nStudent information is updated\n");
        console.log(exists);

} 
}

//This is the function that will remove the specific student
const remove=(id)=>{
    var exists=students.find(ele=>ele.id===id);
    if (!exists) {
      console.log("student not found\n");
  
      
    } else {
      var remaining=[];
      remaining=students.filter(ele=>ele.id!==id);
      console.log("remaining students\n")
      console.log(remaining);
      
    }  
  }




module.exports ={
    add,
    displayAll,
    update,
    updateMany,
    remove
};