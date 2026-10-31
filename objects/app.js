

let student = {
    "name" : "vansh",
    "grades" : [19,82,79,29,33],
    "address" : {
        city : "delhi",
        wsefhb : "wseufb"
    },
    averageGrade : function (){
        let sum =0;
        let noOfSubject =0;

        for(let index in this.grades){

            sum += this.grades[index];
            noOfSubject++;
        }

        return sum / noOfSubject;
    }
}


console.log(student.averageGrade());

// shallow copy
let copyStudent = student;
copyStudent.address.city = "new Delhi";

console.log(student)
console.log(copyStudent)


// deep copy
delete copyStudent.averageGrade;
let newStudent = structuredClone(copyStudent); // structured clone cannot copy the functions
newStudent.address.city = "delhiiii";

console.log(newStudent);
console.log(student);



console.log(Object.keys(student))
console.log(Object.entries(student)) //return array having two elements key and values

let {name , ...restProperties} = student;
console.log(name);
console.log(restProperties)








