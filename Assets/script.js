console.log("you are connnected!")
// Get a reference to the #add-employees-btn element


const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //create array for employee objects
  const employees=[]
  //create a condition for the while loop
  let addMoreEmployees= true
  while (addMoreEmployees) {
    const firstName= prompt("Please enter employee first name")
    const lastName= prompt("Please enter employee last name")
    
    //create a salary validation for a number
    let salary=0;
    let salaryPrompt=true;

    while(salaryPrompt){
      let salaryInput=prompt("Please enter employee salary")
      if(isNaN(salaryInput)){
      alert("Invalid input. Please enter a number");
    } else {
      salary=parseInt(salaryInput);
      salaryPrompt=false;
    }
   }
  //create an employee object that stores input values
  const employee={
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
//create a method to put employee object into employees array
  employees.push(employee)
  //create a prompt to see if the user want to add any more employees
  const anotherOne= prompt("do you want to add anyone else (yes/no)".toLowerCase())
  if(anotherOne!=="yes"){
    addMoreEmployees=false
  }  
} return employees
} 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //calculate the total sum of all employee salaries
const totalSalary = employeesArray.reduce((acc,employee)=> acc + employee.salary,0);

console.log("should total up the salaries")
console.log(totalSalary)
//find the average of the total salary
const avgSalary = totalSalary/employeesArray.length;
console.log(avgSalary)
}





// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
