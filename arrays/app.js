

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];


const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];


//T-021: Can you filter employees who work in the "Engineering" department?
const engineeringEmployees = employees.filter((employee) => {
    if(employee.departmentId === 2){
        return employee
    }
})

//console.log(engineeringEmployees)


//T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const combineNames = employees.map((employee) => {
    if(employee.id == 1){
        employee.name = `${employee.name} (HR)`;
    }
    else if(employee.id == 2){
        employee.name = `${employee.name} (Engineering)`;
    }
    else if(employee.id == 3){
        employee.name = `${employee.name} (Marketing)`;
    }else{
        employee.name = `${employee.name} (Sales)`;
    }
    return employee
});

//console.log(combineNames);


//T-023: Find the highest salary among employees.
const highestSalary = employees.reduce((acc , employee) =>{

    acc = Math.max(acc , employee.salary);
    return acc
}, Number.MIN_VALUE)

//console.log(highestSalary)


//T-024: Check if there is at least one employee in the "Sales" department.
const salesEmployee = employees.reduce((acc , employee) => {
    let isSalesEmployee = employee.departmentId === 4 ? true : false;

    acc = acc || isSalesEmployee;
    return acc;
}, false)

//console.log(salesEmployee)


//T-025: Write a function to filter employees earning more than 6000.
const largeSalary = (employees) => {
    let targetSalary = employees.filter((employee) => {
        return employee.salary > 6000 ? employee : null;
    })
    return targetSalary
}

let targetSalary = largeSalary(employees);
//console.log(salaryOver6000)



// T-026: Create an array of employee names only.
const employeeNames = employees.map((employee) => {
    return employee.name
})

//console.log(employeeNames)



//T-027: Calculate the total salary of all employees using
const totalSalary = employees.reduce((acc , employee) => {
    acc += employee.salary;
    return acc
} , 0);

//console.log(totalSalary)



//T-029: Find the first employee who earns exactly 5100.
const employeeWithTargetSalary = employees.reduce((acc , employee) => {
    if(acc.length == 0 && employee.salary == 5100){
        acc = employee.name
    }
    return acc;
}, "")

//console.log(employeeWithTargetSalary);



// T-044: Write a for-of loop to print the names of all employees from the employees array.
for(let employee of employees){
    console.log(employee.name)
}


//T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
const arr = ['a', 'b', 'c', 'd', 'e'];

const newArr = arr.splice(1 , 3);
//console.log(newArr);
//console.log(arr);


// T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
const nums = [9, 3, 1, 6, 8];
const ascendingSorted = nums.toSorted();
//console.log(ascendingSorted)



//T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
const orignalNums = [1, 2, 3, 4, 5];

const numsToReversed = orignalNums.toReversed(); // returns new array
const numsReverse = orignalNums.reverse(); // mutate the orignal one

//console.log(numsToReversed === orignalNums);
//console.log(numsReverse === orignalNums)

