// Timer
function formatTime(date){
  return date.getHours() + 'h ' + date.getMinutes() + 'm ' + date.getSeconds() + 's' 
}

function convertMilliSecondsToTime(milliseconds){
  durationInSeconds = milliseconds / 1000;
  var hours = Math.floor(durationInSeconds / (60*60));
  var remainder = durationInSeconds % (60*60);
  minutes = Math.floor(remainder / (60));
  seconds = remainder % (60);
  return hours + 'h ' + minutes + 'm ' + seconds + 's'
}

function timeTracker(){
  var startTime = new Date();
  var current = new Date(startTime);
  var endTime = new Date(startTime);

  endTime.setMinutes(startTime.getMinutes() + 40);

  timer = document.getElementById('timer');
  timer.style.cssText = 'color: green';

  timerFunction = setInterval(function() {    
    current.setSeconds(current.getSeconds() + 1);
    duration = Math.abs(current - startTime);
    timer.innerText = 'Timer: ' + convertMilliSecondsToTime(duration);
    if(endTime <= current) {
      timer.style.cssText = 'color: red';
    }
  }, 1000);
}

timeTracker();

// Select Textarea elements * there are two such elements
var textarea_list = document.querySelectorAll('textarea');

// Foreach Texarea element change its height when page displayed
textarea_list.forEach(function(item){
  item.style.cssText = 'height:auto;';
  item.style.cssText = 'height:' + item.scrollHeight + 'px';
});

// Foreach Textarea element add function for resizing at changes
textarea_list.forEach(element => element.addEventListener('keydown', autosize));

function autosize(){
  var el = this;
  setTimeout(function(){
    var scrollLeft = window.pageXOffset ||
    (document.documentElement || document.body.parentNode || document.body).scrollLeft;

    var scrollTop  = window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // alert(scrollTop);
    el.style.cssText = 'height:auto;';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  

   window.scrollTo(scrollLeft, scrollTop);
  },0);
}

