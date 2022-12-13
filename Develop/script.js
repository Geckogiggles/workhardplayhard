var saveBtn = $('.saveBtn');
var currentDayEl = $('#currentDay');
var currentHour = dayjs().hour()


function displayDate() {
  var time = dayjs().format('MMM DD, YYYY');
  currentDayEl.text(time);
}
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

readWorkTimesFromStorage();

function readWorkTimesFromStorage() {
//loop through
for (let i = 9; i < 18; i++) {
  var workTimeSlot = localStorage.getItem(`#hour-${i}`);
  $(`#hour-${i}`).children('textarea').val(workTimeSlot);
  colorChange(i);
}
function colorChange(i){
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
saveBtn.each(function(){
$(this).on('click', function(){
var localName = ($(this).parent().attr('id'));
var localInput =  ($(this).siblings('textarea').val());
localStorage.setItem(localName,localInput);
 })
 });
};
});

displayDate();