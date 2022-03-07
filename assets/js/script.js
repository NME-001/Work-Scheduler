var currentDay = moment().format('LLLL');

var hour9 = $("#09");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");
var hour18 = $("#18");
var hour19 = $("#19");

var hours = moment().hours();
var userInput;
var hourSpan;


$("#currentDay").text(currentDay);


function eventPage() {
    var event9 = JSON.parse(localStorage.getItem('09:00 am')); hour9.val(event9);
    var event10 = JSON.parse(localStorage.getItem('10:00 am')); hour10.val(event10);
    var event11 = JSON.parse(localStorage.getItem('11:00 am')); hour11.val(event11);
    var event12 = JSON.parse(localStorage.getItem('12:00 pm')); hour12.val(event12);
    var event13 = JSON.parse(localStorage.getItem('01:00 pm')); hour13.val(event13);
    var event14 = JSON.parse(localStorage.getItem('02:00 pm')); hour14.val(event14);
    var event15 = JSON.parse(localStorage.getItem('03:00 pm')); hour15.val(event15);
    var event16 = JSON.parse(localStorage.getItem('04:00 pm')); hour16.val(event16);
    var event17 = JSON.parse(localStorage.getItem('05:00 pm')); hour17.val(event17);
    var event18 = JSON.parse(localStorage.getItem('06:00 pm')); hour18.val(event18);
    var event19 = JSON.parse(localStorage.getItem('07:00 pm')); hour19.val(event19);
}

function background () {
      
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hours = parseInt(hours);
        console.log(timeTest);
        console.log(hours);
  //      console.log(this);
        if (hours > timeTest) {
            $(this).addClass("past");
        } else if (hours < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

$(document).ready(function() {
    eventPage()
    background()

    $(".saveBtn").on("Click", function() {
        userInput = $(this).siblings(".form-control").val().trim();
        console.log(userInput);
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, JSON.stringify(userInput));
    })

    $('#clearDay').on("click", function() {
        localStorage.clear();
        eventPage()
    })
});