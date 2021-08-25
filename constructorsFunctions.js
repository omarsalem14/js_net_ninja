var Car = function (maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };

    this.logDriver = function () {
        console.log("The driver name is: " + this.driver,);
        console.log("It's max speed: " + this.maxSpeed);
    };

}
var myCar = new Car(70, "Omar");
var myCar1 = new Car(80, "Ali");
var myCar2 = new Car(90, "Mai");
var myCar3 = new Car(100, "Salem");

myCar.drive(30, 50);
myCar3.logDriver();