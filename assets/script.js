//start of document & list of variables 
$(document).ready(function(){
$("#currentDay").text(moment().format('dddd Do MMMM, YYYY HH:mm:ss'));
$(".btn-group").button("toggle");

//Timeblock variables 
  $("#currenthour").val(moment().format('HH:mm:ss'));
  $("#currenthour").change(function() {
    $("#currenthour").val(moment().format('HH:mm:ss'));
  });
  $("#currenthour").trigger("change");
  const currentHour = moment().hour(); 
// Checking if on current time or passed it 
if (blockHour < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
}
else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
}
else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}

});
//save button and local storage data
$(".saveBtn").on("click", function () {
 alert("Saved")
localStorage.setItem(time, text);
})

//end of document
