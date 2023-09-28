// employees.js

const employee = {
  name: "John Doe",
  age: 30,
  department: "Engineering",
};

// updateEmployeeWithKeyAndValue: Returns an employee with the original key value pairs and the new key value pair.

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;
  return newEmployee;
}

// destructivelyUpdateEmployeeWithKeyAndValue: Updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee.

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// deleteFromEmployeeByKey: Deletes `key` from a clone of employee and returns the new employee (it is non-destructive).

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// destructivelyDeleteFromEmployeeByKey: Returns employee without the deleted key/value pair.

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Exports

module.exports = {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};
