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



document.getElementById("fName").value=null;
document.getElementById("lName").value=null;
document.getElementById("emplId").value=null;
 document.getElementById("salary").value=null;

};





var displayEmployees = function() {

  var htmloutput = '<table style="width:100%"><tr><td><b>First Name:</td><td><b>Last Name:</b></td><td><b>Employee ID:</b></td><td><b>Salary:</b></td></tr>';

var totalSalary = 0;

for (var i = 0; i < employees.length; i++) {
  var zfname =  employees[i]["First Name"];
  var zlname = employees[i]["Last Name"];
  var zempl = employees[i]["Employee ID"];
  var zsal= employees[i]["Salary"];

  htmloutput +=  '<tr><td>' + zfname +  '</td> <td>'+ zlname +'</td> <td>' + zempl +'</td> <td>'+ zsal + '</td> </tr>';

  if (zsal == undefined){}
  else {
    totalSalary += parseFloat(zsal);

  }


}


htmloutput += '</table>'
document.getElementById("draw").innerHTML = htmloutput;



document.getElementById("bank").innerHTML = totalSalary;


};

displayEmployees();
