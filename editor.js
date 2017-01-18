var today = new Date().toDateString();
var object = {};

function textEditorData() {
  if (localStorage[today]){
      object = JSON.parse(localStorage[today]);
      document.getElementById('content').innerHTML=object.content;
  }
}

function saveData() {
  object.content = document.getElementById('content').innerHTML;
  localStorage[today] = JSON.stringify(object);
}

function shareData() {
  var journal = "";
  for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    journal = JSON.parse(localStorage.getItem(key))['content'];
  }
  document.getElementById('journals').innerHTML = JSON.stringify(journal);
}

textEditorData();
