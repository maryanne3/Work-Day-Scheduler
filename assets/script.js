//start of document & list of variables 
$(document).ready(function(){
$("#currentDay").text(moment().format('dddd Do MMMM, YYYY HH:mm:ss'));
$(".btn-group").button("toggle");

//Timeblock variables 
  $("#timeblock").val(moment().format('HH:mm:ss'));
  $("#timeblock").change(function() {
    $("#timeblock").val(moment().format('HH:mm:ss'));
  });
  $("#timeblock").trigger("change");

// Checking if on current time or passed it 
  if(moment().format('HH:mm:ss') == $("#timeblock").val()) {
    $("#timeblock").val(moment().format('HH:mm:ss'));
    $("#timeblock").trigger("change");
  }

});



































//end of document
