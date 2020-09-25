function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("my_Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("my_Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary1() {
    var Car = {
        Model:"Mercades",
        Color:"White",
        Year:2014
     };
     document.getElementById("Dictionary").innerhtml = Car.Color;
}

