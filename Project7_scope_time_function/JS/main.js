var X=25; //creating global variable outside the function
function Add_numbers1() {
    document.write(35 + X + "<br>"); //assigning addition with the global variable
}
function Add_numbers2() { //assigning a second set of data with global variable which will not display
    document.write(X + 100);
}
Add_numbers1(); //calling action to happen
Add_numbers2(); //calling action to happen


function Add_numbers_1() { //creating local variable inside the function
    var X= 46;
    document.write(30 + X + "<br>"); //assigning first set of addition to var X
}
function Add_numbers_2() { //assigning second set of addition to var X
    document.write(X + 1042 + 36);
    }
Add_numbers_1(); //calling the action that is told to display above to happen
Add_numbers_2(); //calling the second action to happen

function Add_numbers12() { //defining function
    var Y=255; //creating a variable inside the function
    console.log( 1879+ Y); //telling console to hold the value of the addition
}
function Add_numbers13() { //creating an error for the console to log siince Y was not defined inside this partial function so it doesn't know what to add
    console.log(154 + Y);
}
Add_numbers12();
Add_numbers13();

function can_redeem() { //creating new function name
    if (new Date().getDate() < 31) { //creating if statement and comparison variable
        document.getElementById("Promotion").innerHTML="Promotion Applied";
    } //calling the innerHTML to display whether the if statement will be applied
}

function get_Date() { //defining new function
    if(new Date().getHours() < 18) { //creating if statement based on hours
        document.getElementById("Greeting").innerHTML="How are you today?"
    } //calling the innerHTML to reflect greeting based on if statement
}

function Age_Function() { //same as below
    Age=document.getElementById("Age").value;
    if(Age >= 18) {
        Vote="You are old enough to vote!";
    }
    else {
        Vote="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Cart_Calculation() { //creating function
    Total=document.getElementById("total").value; 
    if (Total >= 50) { //creating first statement to compare
        Promotion="Promotion applied";
    }
    else { //creating second actiont to take if above is false
        Total="Minimum of 50 was not reached, promotion not applied";
    }
    document.getElementById("what_is_total?").innerHTML = Total;
 }

 function Time_function() { //defining function name
    var Time= new Date().getHours(); //creating variable and assigning it an action
    var Reply;
    if (Time < 12 == Time > 0) { //creating first action the if
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) { //creating the second action to take if above is false
        Reply= "It is the afternoon.";
    }
    else {
        Reply = "It is evening time"; //creating third action to take if not one of the above is true
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
 } //calling the innerHTML to display correct display message


