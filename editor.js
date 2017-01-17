var today = new Date().toDateString();
var object = {};

function textEditorData() {

  if (localStorage[today]){
      object = JSON.parse(localStorage[today]);
      object.content = "What's one thing you want to improve?";
      document.getElementById('content').innerHTML=object.content;
  }
}

function saveData() {
  object.content = document.getElementById('content').innerHTML;
  localStorage[today] = JSON.stringify(object);
}

textEditorData();
