var myArray = new Array();
myArray[0] = 8;
myArray[1] = "Hello"


var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Omar"
myCar.drive = function () { console.log("now driving"); };

myCar.drive();

var myCar2 = {
    maxSpeed: 200,
    driver: "Omar",
    drive: function (speed, time) { console.log(speed * time); }
};
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);