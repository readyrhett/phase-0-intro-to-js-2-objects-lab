// Write your solution in this file!
const employee = {
    name: ["Steve"],
    streetAddress: ["120 E Ave"]
  };
function updateEmployeeWithKeyAndValue (employee, key, value) {
return {
    ...employee,
    [key]: value
};
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key, value) {
    return{
        ...employee,
        [key]: value}
    delete employee.key;
    return employee;}

function destructivelyDeleteFromEmployeeByKey (employee, key, value) {
    delete employee.key;
    employee[key] = value;
    return employee; 
}