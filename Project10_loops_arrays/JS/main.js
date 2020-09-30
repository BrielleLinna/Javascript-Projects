function Call_Loop() { //creating function name
    var Digit=""; //creating variable to be called into HTML based on conditions
    var X=17; //setting variable starting value
    while(X >= 15) { //setting conditional statement
        Digit += "<br>" + X;
        X--; //stating action to execute
    }
    document.getElementById("Loop").innerHTML=Digit;
} //obtaining the loop results based on the conditions provided

function My_Function() {
    var str="Hi, I am Brielle";
    var B= str.length;
    document.getElementById("string_length").innerHTML=B;
} //creating function to define a string then call the str.length function to result in string length

var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for (Y= 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
} //defining variable values and making a function that does a for loop as long as conditions exist

function array_Function() {
    var nature_picture=[];
    nature_picture[0]="Yosemite";
    nature_picture[1]="Cannon Beach";
    nature_picture[2]="Portland Oregon";
    document.getElementById("array").innerHTML="This photo was taken in" + nature_picture[1] + "";
} //creating an array and an index of photos, using a function to pull one item of the array to be displayed within our defined HTML

function constant_function() {
    const mobile_phone= {type:"iphone", model:"8_plus", color:"white"};
    mobile_phone.model="11_pro";
    mobile_phone.color="black";
    document.getElementById("Constant").innerHTML="The lost iphone was a" + mobile_phone.color + mobile_phone.model;
} //defining a constant function which is the mobile_phone, iphone
//modifying the variables with the constant that are able to be modifed and displayed

var A=47;
document.write(A);
{
    let A= 621;
    document.write("<br>" + A);
}
//using let statement to display the variable X 

function add(year) {
    return "This crazy year is" + year;
}
document.getElementById("return_method").innerHTML = add("2020");
//using return function to add and return words to our string

let cat=  {
    breed:"Mainecoon",
    color:"tuxedo",
    age:8,
    weight:20,
    description: function() {
        return "My cat is a" + this.color + this.breed +"who is" + this.age;
    }
};
document.getElementById("cat").innerHTML=cat.description();
//using let function to create and object with properties 
//using return method to create a string in HTML

var practice_break = "";
var A;
for (A = 5; A < 10; A++) {
    if(A === 8) { break; }
    practice_break += "The number is" + A + "<br>";
}
document.getElementById("loop").innerHTML= practice_break;
//using the break method to run a loop then stop once it hits a desired outcome

var practice_continue= "";
var B;
for (B=2; B<8; B++) {
    if(B === 4) {continue;}
    practice_continue += "The number is" + B + "<br>";
}
document.getElementById("test").innerHTML=practice_continue;
//using contiinue method to start at an initial point once the desired outcome is found



