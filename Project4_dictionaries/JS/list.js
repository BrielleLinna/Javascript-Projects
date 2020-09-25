function my_Dictionary() { // function name
    var Animal = {  //creating key value pairs for variable Animal
        Species:"Feline",
        Color:"Black",
        Breed:"Mainecoon",
        Age:8,
        Sound:"Meow!"
    };
    delete Animal.Color; //calling for kvp to be deleted prior to be called
    document.getElementById("Dictionary").innerHTML = Animal.Color; //calling deleted kvp to result in undefined
}