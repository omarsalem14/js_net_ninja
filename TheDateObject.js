var birthday = new Date(2020, 08, 23, 10, 25, 30)
var birthday1 = new Date(2021, 08, 23, 10, 25, 30)

//get the month of the date(0:11-Jan-Dec)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1-31)
console.log(birthday.getDate());

//get the daty of the week (0-6)
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

//get the number of melliseconds since 1st jan 1970 
console.log(birthday.getTime());
console.log(birthday1.getTime());


if (birthday.getTime === birthday1.getTime) {
    console.log("Both is equal is born in the same date")
} else {
    console.log("No, Is not equal is not born in the same date")
}


