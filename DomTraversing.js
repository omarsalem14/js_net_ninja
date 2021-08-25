//First Method Is by[document.getElementByClassName]
document.getElementsByClassName("content");
var myContentDivs = document.getElementsByClassName("content");


//Second Method Is by[document.getElementsByTagName]
document.getElementsByTagName("h2");
var myH2 = myContentDivs[1].getElementsByTagName("h2");

//Third Method Is by[document.getElementsById]
document.getElementById("page.title")