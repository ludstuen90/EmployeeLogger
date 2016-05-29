console.log("Hola, mundo!");

var employees = [];

var addEmpl= function() {
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var employeeId = document.getElementById("emplId").value;
  var sal = document.getElementById("salary").value;

var newEmpl = {
  'First Name': firstName,
  'Last Name': lastName,
  'Employee ID': employeeId,
  'Salary': sal
};

employees.push(newEmpl);



  console.log(employees);

};
