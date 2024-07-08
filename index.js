// Write your solution in this file!
const employee = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
    
}
function updateEmployeeWithKeyAndValue(employee, occupation , Engineer){
    const newEmployee = { ...employee};    
    newEmployee[occupation] = Engineer;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, occupation, writer){
    employee[occupation] = writer;
    return employee;
}

function deleteFromEmployeeByKey(employee, hobby){
    const newEmployee = {...employee};
    delete newEmployee[hobby];
    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, hobby){
    delete employee[hobby];
    return employee;
}