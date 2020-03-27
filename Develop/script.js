$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// // loop
// var content = $(".container")
// // content.empty()
// console.log("is empty")
// for (var i = 9; i < 18; i++) {
//   var row = $("<div>")
//   // timeslot
//   var col = $("<div>")
//   var timeslot = $("<div>")
//   var col2 = $("<div>")
//   // textarea
//   if (moment().isBefore(HH.mm a) < 10) {
//     var textarea = $("<textarea>").addClass("past")
//   } else if (i = 10) {
//     var textarea = $("<textarea>").addClass("current")
//   } else {
//     var textarea = $("<textarea>").addClass("future")
//   }
//   var saveBtn = $("<button>")
//   // <div class="row">
//   // <div class="col">
//   // ..
//   col.append(timeslot);
//   col2.append(saveBtn);
//   row.append(col, textarea, col2);
//   content.append(row);
// }