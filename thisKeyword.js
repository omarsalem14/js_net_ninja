var myCar2 = {
    maxSpeed: 200,
    driver: "Omar",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    test: function () {
        console.log(this);
    }
};
var myCar2 = {
    maxSpeed: 200,
    driver: "Omar",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    test: function () {
        console.log(this);
    },
    logDriver: function () {
        console.log("The Driver is: " + this.driver);
    }
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);