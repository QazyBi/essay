// This Part for Counting Word Number
var input = document.getElementById('input');
var count = document.getElementById('wordCount');

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

function wordCounter(input_text){
  var text = input_text.split(' ');
  var wordCount = 0;
  
  for (var i=0; i < text.length; i++){
    if (text[i] !== '' && isWord(text[i])){
      wordCount++;
    }
    if(wordCount > 250){
      count.style.cssText = 'color: green';
    }else{
      count.style.cssText = 'color: black';
    }
  }
  count.innerText = 'Words: ' + wordCount;  
}

wordCounter(input.value);