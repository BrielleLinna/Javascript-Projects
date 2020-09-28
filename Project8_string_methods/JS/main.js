function full_Sentence() { //practice for function below
    var part_1="I have";
    var part_2="made this";
    var part_3="into a complete";
    var part_4="sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function saying() { //defining function
    var part1="treat others"; //creating first string variable
    var part2="to be treated"; //creating another string variable
    var part3="as you wish"; //creating another string variable
    var whole_sentence=part1.concat(part3, part2); //concatenating the strings into the correct order to merge
    document.getElementById("merge").innerHTML = whole_sentence;
} //defining where to call the innerHTML to display

function replace() { //defining function
    var name= "Felix is my 2 year old tabby mainecoone cat"; //creating a string
    var section= name.slice(0,5); //defining the index value to extract
    document.getElementById("cat").innerHTML= section;
} //displaying the sliced string into the HTML

function practice() { 
    var str="I love kale in smoothies!"; 
    var res= str.toUpperCase();
    document.getElementById("kale").innerHTML = res;
} //using the toUpperCase() to change the string to all uppercase

function practice2() {
    var str="I live in Portland."
    var p= str.search("Portland");
    document.getElementById("location").innerHTML=p;
} //.strsearch to search for the index for a certain word

function change() { 
    var Y= 154;
    document.getElementById("change_numbers").innerHTML= Y.toString();
} //making a function to change a number into a string

function string_Method() {
    var Y=182;
    document.getElementById("Numbers_to_string").innerHTML=Y.toString();
} //practice on making a function to change to a number into a string

function precision_Method() {
    var X= 52876943.123869;
    document.getElementById("Precision").innerHTML = X.toPrecision(5);
} //usimg a function to utilize the .toPrecision() to round to a speicifed length

function learning() {
    var num= 824963.77;
    var b=num.toFixed();
    document.getElementById("new_method").innerHTML= b;
} //utilizing a function to use variables and the toFixed() to round number to a fixed whole number

function learning_more() {
    var more= 265;
    var h=more.valueOf();
    document.getElementById("new_method2").innerHTML= h;
} //utilizing a function and valueOf method to take the variable in this case the number back to original or primitive s