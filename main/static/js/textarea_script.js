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
    el.style.cssText = 'height:auto;';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}


// This Part for Counting Word Number
input = document.getElementById('input');
count = document.getElementById('wordCount');

input.addEventListener('keyup', function(e){
  wordCounter(e.target.value);
});

function isWord(string){
  hasAlphaNumeric = false;
  for(var i=0; i <= string.length; i++){
    ascii_number = string.charCodeAt(i);
    if((ascii_number > 47 && ascii_number < 58) ||  // numeric
       (ascii_number > 64 && ascii_number < 91) ||  // lower letters
       (ascii_number > 96 && ascii_number < 123)) { // upper letters
        hasAlphaNumeric = true;
        return hasAlphaNumeric;
    }
  }
  return false;
}

function wordCounter(text){
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i=0; i < text.length; i++){
    if (text[i] !== '' && isWord(text[i])){
      wordCount++;
    }
  }
  count.innerText = 'Words: ' + wordCount;  
}

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
  var wordCountText = document.getElementById('wordCount').innerText;
  if (wordCountText == 'Words: 1'){
    var startTime = new Date();
    var current = new Date(startTime);
    var endTime = new Date(startTime);

    endTime.setMinutes(startTime.getMinutes() + 40);

    timerFunction = setInterval(function() {    
      current.setSeconds(current.getSeconds() + 1);
      timer = document.getElementById('timer');
      duration = Math.abs(current - startTime);
      timer.innerText = 'Timer: ' + convertMilliSecondsToTime(duration);
    }, 1000);
  }
}
input.addEventListener('keyup', timeTracker);