# Day_Planner

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - present to add styling elements
- Bootstrap - automate syling elements
- jQuery - used to create the logic controlling the application
- moment.js - used to aid in apportioning time to some elements
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages

## Summary

My first set of commits set a static framework, along with bootstrap and css styling, as a model for how I would proceed to build a more dynamic, jQuery driven.  The below code from my js file basically sets the calendar, calls the styling, and assigns the color to each time block based on the time of day.

Given that I rely on a loop from 9 to 18 to assign some of the ids and data-ids, I had to write a corresponding loop to build the local storage retreival.  That proved a lot more cumbersome and brain wracking to resolve, but it can be found below the calendar setup and styling.

## Code Snippet

```js

Calendar

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
        if (t == time) {
            textarea.addClass("present");
        };
        if (t > time) {
            textarea.addClass("future");
        };
    };
}

Local Storage data retreival

// looped value extraction from local storage, and input into the textareas created byt the buildCalendar loop
function recallNote() {
    for (t = 9; t < 18; t++) {
        copyData = localStorage.getItem(t)
        if (copyData == null) {
            return;
        } else {
            $("#" + t).val(copyData)
        };
    };
};

```

## Acknowledgements

Jerome Chenette, Kerwin Hy, Mahisha Manikandan, Corbin Brockbank, Sam Poppe, Michael Downs, Dan Fellows

## Author Links

Brad Davis
[Email](davis.bradleyj@gmail.com)
[LinkedIn](https://www.linkedin.com/in/brad-davis-7885884/)
[GitHub](https://github.com/davisbradleyj)
