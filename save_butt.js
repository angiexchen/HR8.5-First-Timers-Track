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

//get url
function getCurrentTabUrl(callback) { 
    var queryInfo = {
      active: true,
      currentWindow: true
    };
     chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0];
      var url = tab.url;
      callback(url);
    });
 }

// function renderURL(statusText) {
//     document.getElementById('urlArea').textContent = statusText;
// }

// function storeURL(statusText) {
//     //return statusText;
//     text = statusText;
//     return text
// }


//get url button functionality
// document.addEventListener('DOMContentLoaded', function() {
//     var getUrl = document.getElementById('getUrl');

//     getUrl.addEventListener('click', function() {
//         getCurrentTabUrl(function(url) {
//             storeURL(url);
//         });
//     }, false);
// }, false);
 

window.onload = function() {    
    var box = document.getElementById('view_text');
    var myline = getCurrentTabUrl(function(url) {
        myline = url;
    }); 

    chrome.storage.sync.set({myline: ''});
    chrome.storage.sync.get(myline, function(data) {
        box.innerHTML = data.myline;
    });

    document.getElementById('save_button').onclick = function() {    
        var note = document.getElementById('my_text').value;
        note = note.replace(/\n/gi, "<br />");
        chrome.storage.sync.set({myline: note}, function(data){
            //alert('Success!');
            alert(myline);
        });

    }
}