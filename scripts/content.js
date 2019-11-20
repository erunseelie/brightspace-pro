// ==UserScript==
// @name           Grade Append
// @namespace      dmitchner
// @include        https://ggc.view.usg.edu/d2l/home/*
/* Description     The Grade Append userscript is used to add the student's current grade to the navigation wrapper.
This allows the student to keep track of their grade at all times without having to access the grade section of D2L.
*/
// ==/UserScript==

var href = jQuery("a").attr("href");
var classID = href.replace('/d2l/home/', '');
console.log(classID);
appendGrade(classID);

function appendGrade(classID) {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("id", "test");
    var br = document.createElement("br");
    var newContent = document.createTextNode("Grade: ");
    jQuery.each(jQuery('.d2l-navigation-s-main-wrapper div.d2l-navigation-s-item'), function (ind) {
        jQuery(this).attr('id', 'id-' + parseInt(ind + 1));
        jQuery(".d2l-navigation-s-main-wrapper").append(newContent, br, newDiv);
    });
    jQuery("#test").load("/d2l/lms/grades/index.d2l?ou='" + classID + "' #z_i");

}


// ==UserScript==
// @name           Assignment Feedback
// @namespace      dmitchner
// @include        https://ggc.view.usg.edu/d2l/lms/dropboclassID/user/folders_list.d2l?ou=*
/* Description     The Assignment Feedback userscript is used to display the student's feedback for graded assignments on the assignments page.
This allows student to see everything on one page so they don't have to manually look at feedback for each assignment.
*/
// ==/UserScript==

//regEx filter for d2l assignments
let regEx = /\b(\bhttps?:\/\/ggc\.view\.usg\.edu\/d2l\/lms\/dropbox\/user\/folder_user_view_feedback\.d2l\?db=\S+)/g;

//Selects links in the evaluation status column
var links = document.getElementsByClassName("d2l-link d2l-link-inline");

$(function () {
    $.get(links[1], function (result) {
        var PageText = $(result).find('.fct_w').text();
        console.log(PageText);
        // create div
        var newDiv = document.createElement("div");
        //add id to div
        newDiv.setAttribute("id", "test");
        $(document.getElementsByClassName(".d_gc.d_gt)")).append(newDiv);
        var newContent = document.createTextNode(PageText);
        $('.d_gc.d_gt:nth-child(4n)').each(function (eachCounter) {
            $(this).attr("id", "id-" + parseInt(eachCounter + 1));
        });
        $(".d_gc.d_gt:nth-child(4n)").append('<br/>', newContent, newDiv);

        // $("id-2").load( "https://ggc.view.usg.edu/d2l/lms/dropbox/user/folder_user_view_feedback.d2l?db=1619880&grpid=0&isprv=0&bp=0&ou=1802552 ('.fct_w').text()" );

        function makeTable(container, data) {
            var table = $("<table/>").addClass('CSSTableGenerator');
            $.each(data, function (rowIndex, r) {
                var row = $("<tr/>");
                $.each(r, function (colIndex, c) {
                    row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
                });
                table.append(row);
            });
            return container.append(table);
        }

        $(document).ready(function () {
            var data = [["Assignment Feedback"], //headers
                ["Assignment 1", PageText],
                ["Assignment 1", PageText],
                ["Assignment 1", PageText]];
        });
    });
});

