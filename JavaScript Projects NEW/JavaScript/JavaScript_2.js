function sale_function() {
    var sale_output;
    var items=document.getElementById("sale_item").value;
    var sale_string = "is 50% off!";
    switch(items) {
        case "Summer dress":
            sale_output="Summer dress" + sale_string;
        break;
        case "Sandals":
            sale_output="Sandals" + sale_string;
        break;
        case "Sunglasses":
            sale_output="Sunglasses" + sale_string;
        break;
        case "Denim Jacket":
            sale_output="Denim Jacket" + sale_string;
        break;
        case "Floral Scarf":
            sale_output="Floral Scarf" + sale_string;
        break;
        default:
        sale_output="Please enter item exactly as written in the above list.";
    }
    document.getElementById("Output").innerHTML= sale_output;
}

function my_name() {
    var B=document.getElementsByClassName("Click");
    B[0].innerHTML = "This text has changed!";
}

function myCanvas() {
    var C=document.getElementById("myCanvas");
    var CTX= C.getContext("2d");
    var img=document.getElementById("nature");
    CTX.drawImage(img,10,10);
}



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);