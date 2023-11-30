const{add, displayAll, update, updateMany,remove}=require("../updates/studentsUpdates");

const newStudent1={
    name: "Ines Kirezi",
    age:24,
    email:"ines@gmail",
    gender:"female"
};


add(newStudent1);
displayAll();
update(2,"email","isaac@gmail.com");
    const newUpdate={
        name:"Ange Mukundente",
        age:19,
    };

updateMany(1,newUpdate);
remove(5);
 