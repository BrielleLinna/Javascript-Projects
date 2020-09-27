function my_Function() { //defining function name
    document.getElementById("Test").innerHTML = 0/0; //using NaN to display whether or not this is 'not a number'
}

function my_Function1() { 
document.getElementById("Demo").innerHTML = isNaN('This is a string'); //using a function to display a true to this not being a number
}

function my_Function2() {
    document.getElementById("False").innerHTML = isNaN('007'); //using NaN to say true this is not 'not a number'
}

document.write(10>2); //displaying a true or false based on comparison

document.write("10" + 5); //combining a sting and number

console.log(2 + 2); //putting info into the console log

console.log( 6 > 3); //putting data to be displayed only in log

document.write(10==10); //comparing if values match

document.write(10==3); //comparing a false matching data

X= 10; //assigning variables a value
Y=10;
document.write(X === Y); //comparing whether data is equal to and matches

X=82; //assigning variables aa value
Y="82"; //comparing a different data type to result in false
document.write(X ===Y);

document.write(11/23/1993===11/23/1994); //comparing whether the data equals each other and is same type of data

document.write(5 > 2 && 10 > 4); //using and operator to determine true

document.write(5 > 10 && 10>4); //using and operator to determine false

document.write(5 > 10 || 10 > 4); //using or operator to determine true since one or the othe is

document.write(5 > 10 || 10 > 20); //using or operator to determne false since neither are true

function not_Function() { //naming the function
    document.getElementById("Not").innerHTML = !(5 > 10); //using ! function as a double negative
}
 