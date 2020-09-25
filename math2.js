
window.alert(Math.random());

function addition_Function() { //defining function name
    var addiction = 2 + 2;  //assigning values to a variable
    document.getElementById("test").innerHTML= "2 + 2 = " + addition;
} //calling the element to be displayed by ID method

function multiplication() { //defining function name
    var multiplication = 15*62; //making a variable with values to multiply
    document.getElementById("var").innerHTML = multiplication;
} //calling the element to be displayed

function division(a, b) { //defining function
    var div = 10 / 2; //giving variable values to be divided
    document.getElementById("demo").innerHTML = div;  
} //calling element to be displayed

function addition() { //defining function
    var hi= 5 + 9; //giving values to be added
    document.getElementById("add").innerHTML = "results in:" + hi;
} //calling element to be displayed


function modulus_Operator() { //defining function
    var simple_Math = 25 % 6; //giving values mto be computed
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of:" + simple_Math;
} //calling element to be displayed

var varName= 10 // defining a variable to a value
var mod_Math=varName++; //creating another variable to be added to first variable value
    document.getElementById("mod").innerHTML=varName++;
//calling element to be displahed

var varName1= 7 //defining a variable to a value
var mod_Math1=varName1--; //creating another variable to subtract one from value
    document.getElementById("simple").innrHTML=varName1--;
//calling element to be displayed