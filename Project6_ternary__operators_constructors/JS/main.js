function Ride_Function() { //naming function
    var Height, Can_ride; //creating variable response
    Height=document.getElementById("Height").nodeValue;
    Can_ride=(Height <52)? "You are too short":"You are tall enough"; //creating variable value to be compared
    document.getElementById("Ride").innerHTML=Can_ride + "to ride";
}

function Vote_Function() { //creating voting function
    var Vote, Can_Vote; //creating variable name and results for innerHTML
    Age=document.getElementById("Vote").nodeValue;
    Can_Vote=(Vote >18)? "You are old enough":"You are eligible"; //creating comparison response
    document.getElementById("Age").innerHTML=Can_Vote + "to vote"; //calling results to innerHTML
}

function Vehicle(Make, Model, Year, Color) { //same purposes as example below
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}

var Jack=new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily=new Vehicle("Jeep", "Trail Hawk", "2019", "White");
var Erik=new Vehicle("Ford", "Pinto", "1971", "Mustard");
function myFunction() {
document.getElementById("Keywords_and_Constructors").innerHTML="Erik drives a" + Erik.Vehicle_Color + "-colored"+ Erik.Vehicle_Model +"manufactured in" + Erik.Vehicle_Year;
}

function Cat(Breed, Color, Age,) { //creating function
    this.Cat_Breed=Breed; //defining the objects that will possess the function
    this.Cat_Color=Color;
    this.Cat_Age=Age;
}

var Felix=new Cat("Mainecoon", "Tuxedo", "8"); //creating new objects
var Osiris=new Cat("Tabby", "Brown", "2");
function myFunction1() {
    document.getElementById("Practice_Constructors").innerHTML="Felix is a" + Felix.Cat_Color + "-colored" + Felix.Cat_Breed;
} //calling what var we want to receive the action of the function to the innerHTML

function Nested() { //creating main function
    document.getElementById("Nested_Function").innerHTML=Count(); //defining elementId and what will be defined to display in HTML
    function Count()  { //creating nested function name
        var Starting_point=2; //creating starting point
        function Plus_one() {Starting_point +=2;} //defining what the nested function should do to base point
        Plus_one();
        return Starting_point; //invoking function to return the nested function to the main function's innerHTML
    }
}
