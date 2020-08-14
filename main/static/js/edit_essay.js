var edit_essay_button = document.getElementById("edit-essay-btn");
var cross_button = document.getElementById("cross-btn");

edit_essay_button.addEventListener("click", changeToEditMode);
cross_button.addEventListener("click", changeToViewMode);

var initial_text = document.getElementById("input").value;
var initial_word_count = document.getElementById("wordCount").innerText;


function changeToEditMode(){
    // get HTML elements
    var submit_button = document.getElementById("submit-btn");
    var input = document.getElementById("input");
    // set styling
    submit_button.style.cssText = "display: block";
    cross_button.style.cssText = "display: block";
    edit_essay_button.style.cssText = "display: none";
    // make input textarea writeable
    input.removeAttribute("readonly");
}

function changeToViewMode(){
    // get HTML elements
    var submit_button = document.getElementById("submit-btn");
    var input = document.getElementById("input");
    // set styling
    submit_button.style.cssText = "display: none";
    cross_button.style.cssText = "display: none";
    edit_essay_button.style.cssText = "display: block";
    // return initial value
    input.value = initial_text;
    document.getElementById("wordCount").innerText = initial_word_count;
    // make input textarea readonly
    input.setAttribute("readonly", true);
}