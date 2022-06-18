// Practice 1

//Variable Set
let x, y, z;// Statement 1
x = 4;// Statement 2
y = 5;// Statement 3
z = x + y + 95 * 2 / 25;// Statement 4
//Function Set
function f1() {
    document.getElementById("p1").innerHTML = "Value is " + z + " Final"
    document.getElementById("p2").innerHTML = "Value is " + (x + z) / y + " Final"
    document.getElementById("p3").innerHTML = x + "  Fucking  " + y
}


// Practice 2
function f2() {
    var cars = ["ferrari", "subaro", "lamborgini"] //objectt cars
    document.getElementById("p4").innerHTML = cars;
}
function f3() {
    var cars = ["ferrari", "subaro", "lamborgini"]
    cars[0] = "Toyota";
    cars.push("Ford")
    document.getElementById("p4").innerHTML = cars;


}

function f4() {
    const car = { Brand: "Mercedes Benz", Model: "s500", Color: "Midnight Blue" }
    car.Model = "c200"//select property of objects
    car.Owner = "Mr ENZO"
    document.getElementById("p5").innerHTML = car.Owner + " have a " + car.Brand + " " + car.Model + " with Smart Metalic " + car.Color;
}
function f5() {
    var farenhitevalue = document.getElementById("farenhite").value
    var SelsiusValue = (5 / 9) * (farenhitevalue - 33);
    document.getElementById("p7").innerHTML ="At time "+ Date()+"<br>"+ SelsiusValue +"<br>"+ " degree of centigrade";
}
