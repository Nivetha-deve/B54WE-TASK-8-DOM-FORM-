document.getElementById("myform").addEventListener('submit', function(event) {
  event.preventDefault();

var first = document.getElementById("Firstname").value;
var last = document.getElementById("Lastname").value;
var adress = document.getElementById("Adress").value;
var Pincode = document.getElementById("Pincode").value;
var gender = document.getElementById("Gender").value;
var foodCheckboxes = document.getElementsByName("foods[]");
var selectfood = [];
 for (var i = 0; i < foodCheckboxes.length; i++) {
    if (foodCheckboxes[i].checked) {
    selectfood.push(foodCheckboxes[i].value);
}
 }
var state =document.getElementById("State").value;
var country = document.getElementById("Country").value;

if (selectfood.length < 2) {
  alert("Please select at least two food options.");
  return;
}
var table =document.getElementById("itemlist");
var row = table.insertRow(1);

var cell1 =row.insertCell(0);
var cell2 =row.insertCell(1);
var cell3 =row.insertCell(2);    
var cell4 =row.insertCell(3);
var cell5 =row.insertCell(4);
var cell6 =row.insertCell(5);
var cell7 =row.insertCell(6);
var cell8 =row.insertCell(7);

cell1.innerHTML = first;
cell2.innerHTML = last;
cell3.innerHTML = adress;
cell4.innerHTML = Pincode;
cell5.innerHTML = gender;
cell6.innerHTML = selectfood.join(" , ");
cell7.innerHTML = state;
cell8.innerHTML = country;

document.getElementById("myform").reset();
});

