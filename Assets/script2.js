
// setting global variables to traverse any functions
var time = moment().format("HH");
var date = moment().format("dddd, MMMM Do YYYY");
var row;
var col1;
var timeslot;
var textarea;
var col2;
var saveBtn;

$("#currentDay").text(date);

// loop
var content = $(".container")
// content.empty()
console.log("is empty")
// time to build ...some time?
function buildCalendar() {
    for (var time = 9; time < 18; time++) {
        // adds rows to container
        var row = $("<div>");
        row.addClass("row");
        //adds column1 to container
        var col1 = $("<div>");
        col1.addClass("col-1 hour py-4")
        //adds timeslot to col1
        var timeslot = $("<div>")
        timeslot.addClass("time-block")
        timeslot.text(time + ":00")
        col1.append(timeslot)
        //adds text area
        var textarea = $("<textarea>")
        textarea.addClass("col-10")
        //adds column2 to container
        var col2 = $("<div>")
        col2.addClass("col-1 saveArea py-4")
        //adds button, into col2
        var saveBtn = $("<button>")
        saveBtn.addClass("saveBtn")
        saveBtn.text("Save")
        col2.append(saveBtn)
        // append columns into rows, then rows into container
        row.append(col1, textarea, col2)
        content.append(row);

        if (moment().isBefore(timeslot.text(time + ":00"))) {
        textarea.addClass("future");
        } else if (moment().isSame(timeslot.text(time + ":00"))) {
        textarea.addClass("present");
        } else (moment().isAfter(timeslot.text(time + ":00"))) 
        textarea.addClass("past");
        };
    };

buildCalendar();