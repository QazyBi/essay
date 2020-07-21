alert("LOLOL");
var wordCount = 0;
var textarea_list = document.querySelectorAll('textarea');

textarea_list.forEach(function(item){
  item.style.cssText = 'height:auto;';
  item.style.cssText = 'height:' + item.scrollHeight + 'px';
});
textarea_list.forEach(element => element.addEventListener('keydown', autosize));
textarea_list.forEach(element => element.addEventListener('keypress', wordCounter));

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto;';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
function wordCounter(event){
  setTimeout(function(){
    if (event.key == ' '){
      wordCount += 1;
      text = document.querySelector('.wordCount');
      text.textContent = `Words: ${wordCount}`;
    }
  },0);
  
}