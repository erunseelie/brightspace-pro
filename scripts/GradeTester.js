// ==UserScript==
// @name           Grade tester
// @namespace      dmitchner
// @include        https://ggc.view.usg.edu/d2l/home/*
// ==/UserScript==
document.body.onload = addElement;
function addElement () {
    // create div
    var newDiv = document.createElement("div");
    //add id to div
    newDiv.setAttribute("id", "test");
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    var newContent = document.createTextNode("/ 100 %");
    /*     var urlKey = $(".d2l-navigation-s-menu-item-root d2l-hidden a").prop("href").split("/")[3]
         console.log(urlKey);*/
    //assign id to each class on navigation bar
    $.each($('.d2l-navigation-s-main-wrapper div.d2l-navigation-s-item'), function(ind) {
        $(this).attr('id', 'id-' + parseInt(ind + 1));
        //add grade to div
        $("#id-3").append(newDiv)
        //add text to bottom of div
        $("#id-3").append(newContent)
//$(document.getElementsByClassName("d2l-navigation-s-item")[0].textContent == "Grades").append(newDiv)
    });
    //load grade from id z_i
    $("#test").load( "/d2l/lms/grades/index.d2l?ou=1802540 #z_i" );
}

var parts = 'https://ggc.view.usg.edu/d2l/lms/grades/index.d2l?ou=1802590'.split('=');
var lastSegment = parts.pop() || parts.pop();
console.log(lastSegment);
// document.body.onload = addElement;
// function addTime() {
//     var timeDiv= document.createElement("div");
//       var newContent = document.createTextNode("Hi there and greetings!");
//   // add the text node to the newly created div
//   timeDiv.appendChild(newContent);
//     $("#id-4").append(timeDiv);
// }