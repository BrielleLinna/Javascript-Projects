
window.alert(Math.random());

function addition_Function() {
    var addiction = 2 + 2; 
    document.getElementById("test").innerHTML= "2 + 2 = " + addition;
}

function multiplication(x, y) {
    var multiplication = x * y;
    document.getElementById("var").innerHTML = multiplication(15,62)
}

function division(a, b) {
    var div = 10 / 2;
    document.getElementById("demo").innerHTML = div;  
}

function addition() {
    var hi= 5 + 9
    document.getElementById("add").innerHTML = "results in:" + hi;
}


function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of:" + simple_Math;
}

function math() {
    var mod_Math = 10++;
    document.getElementById("mod").innerHTML="When you use ++ it counts up resulting in:" + mod_math;
}

function math_1() {
    var simple = 7--;
}
    document.getElementById("simple").innerHTNL="When you use -- it counts down resulting in:"+ simple;


