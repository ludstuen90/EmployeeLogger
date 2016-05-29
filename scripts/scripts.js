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
displayEmployees();

  console.log(employees);

};





var displayEmployees = function() {
document.getElementById("draw").innerHTML = '';

for (var i = 0; i < employees.length; i++) {
  var zfname = "First Name: " + employees[i]["First Name"];
  var zlname = "Last Name: " + employees[i]["Last Name"];
  var zempl = "EMPL ID: " + employees[i]["Employee ID"];
  var zsal= "Salary: " + employees[i]["Salary"];
  document.getElementById("draw").innerHTML += (zfname + zlname + zempl + zsal);
}

};

displayEmployees();
