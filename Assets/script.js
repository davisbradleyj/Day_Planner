// setting global variables to traverse any functions
var time = moment().format("HH");
var date = moment().format("dddd, MMMM Do YYYY");
var row;
var col1;
var timeslot;
var textarea = $("<textarea>")
var col2;
var t;
var saveBtn = $("<button>");
var storeData;
var storeNote = $("#" + t);
var copyData;

$("#currentDay").text(date);

// This fuctionality saves the text field into local storage, but had to traverse from a button data-id to the textarea id to do so
$(document).on("click", ".saveBtn", function (event) {
    event.preventDefault()
    storeData = $(this).data("id")
    storeNote = $("#" + storeData).val()
    localStorage.setItem(storeData, storeNote)
});

// looped value extraction from local storage, and input into the textareas created byt the buildCalendar loop
function recallNote() {
    for (t = 9; t < 18; t++) {
        copyData = localStorage.getItem(t)
        if (copyData) {
            $("#" + t).val(copyData)
        };
    };
};

// loop
var content = $(".container")
content.empty()
// time to build ...some time?
function buildCalendar() {
    for (var t = 9; t < 18; t++) {
        // adds rows to container
        var row = $("<div>");
        row.addClass("row");
        //adds column1 to container
        var col1 = $("<div>");
        col1.addClass("col-1 hour py-4")
        //adds timeslot to col1
        var timeslot = $("<div>")
        timeslot.addClass("time-block")
        timeslot.text(t + ":00")
        col1.append(timeslot)
        //adds text area
        var textarea = $("<textarea>")
        textarea.addClass("col-10")
        textarea.attr("id", t)
        //adds column2 to container
        var col2 = $("<div>")
        col2.addClass("col-1 saveArea py-4")
        //adds button, into col2
        var saveBtn = $("<button>")
        saveBtn.addClass("saveBtn")
        saveBtn.attr("data-id", t)
        saveBtn.text("Save")
        col2.append(saveBtn)
        // append columns into rows, then rows into container
        row.append(col1, textarea, col2)
        content.append(row);


        // set the time "class" - past, present, future       
        if (t < time) {
            textarea.addClass("past");
        };
        if (t === time) {
            textarea.addClass("present");
        };
        if (t > time) {
            textarea.addClass("future");
        };
    };
};

buildCalendar();
recallNote();