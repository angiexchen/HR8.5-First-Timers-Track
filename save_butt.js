// document.addEventListener('DOMContentLoaded', function() {

//     var saveButton = document.getElementById('save_button');
  
//     saveButton.addEventListener('click', function() {
//         // Find html elements.
//         var textArea = document.getElementById('my_text');
//         var div = document.getElementById('view_text');

//         // Put the text in a variable so we can manipulate it.
//         var text = textArea.value;

//         // Print the text in the div made for it.
//         div.innerHTML = text;
//     }, false);    
//   }, false);

window.onload = function() {
    document.getElementById('save_button').onclick = function() {
        var value = document.getElementById('my_text').value;

        chrome.storage.sync.set({'myLine': value}, function(){
            // alert('Success!');
        });
    }
}