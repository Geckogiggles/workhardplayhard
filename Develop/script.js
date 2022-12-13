//Declaration of global variables
var saveBtn = $('.saveBtn');
var currentDayEl = $('#currentDay');
var currentHour = dayjs().hour()

//Display the Date
function displayDate() {
  var time = dayjs().format('MMM DD, YYYY');
  currentDayEl.text(time);
}
// Wrapper to ensure functions only start when HTML is loaded completely
$(document).ready(function () {

readWorkTimesFromStorage();

function readWorkTimesFromStorage() {
//Loops through all the time slots so that not only the first block works
for (let i = 9; i < 18; i++) {

  $(`#hour-${i}`).children('textarea').val(workTimeSlot);
  colorChange(i);
  var workTimeSlot = localStorage.getItem(`hour-${i}`);
}
// function that reassigns classes for the past, present, future
function colorChange(i){
  console.log(currentHour+ "stuff1");
  console.log(i + "stuff2");
  if (currentHour < i) {
    $(`#hour-${i}`).removeClass('past')
    $(`#hour-${i}`).removeClass('present')
    $(`#hour-${i}`).addClass('future')
  } else if(currentHour === i) {
    $(`#hour-${i}`).removeClass('future')
    $(`#hour-${i}`).addClass('present')
  } else {
    $(`#hour-${i}`).removeClass('future')
    $(`#hour-${i}`).removeClass('present')
    $(`#hour-${i}`).addClass('past')
  }
}
// For each of the save buttons, it collects the data values given to the textarea
saveBtn.each(function(){
$(this).on('click', function(){
var localName = ($(this).parent().attr('id'));
var localInput =  ($(this).siblings('textarea').val());
console.log(localName);
console.log(localInput);
localStorage.setItem(localName,localInput);
console.log(localStorage.getItem(localName))
 })
 });
};
});

displayDate();