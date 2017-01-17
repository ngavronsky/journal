var today = new Date().toDateString();
document.getElementById('date').innerHTML= today;

var object = {};

function goodButton(){
  window.location.assign("good.html");
  goodSaveData();
}

function badButton(){
  window.location.assign("bad.html");
  badSaveData();
}

function goodSaveData(){
  if (localStorage[today]){
      object = JSON.parse(localStorage[today]);
  }

  if (object && object.goodclickcount) {
      object.goodclickcount = Number(object.goodclickcount) + 1;
  }

  else {
      object.goodclickcount = 1;
  }
  localStorage[today] = JSON.stringify(object);
}

function badSaveData(){
  if (localStorage[today]){
      object = JSON.parse(localStorage[today]);
  }

  if (object && object.badclickcount) {
      object.badclickcount = Number(object.badclickcount) + 1;
  }

  else {
      object.badclickcount = 1;
  }
  localStorage[today] = JSON.stringify(object);
}

function bannerShowIndex(){
  var goodsum = 0;
  var badsum = 0;

  for (var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);
      goodsum += JSON.parse(localStorage.getItem(key))['goodclickcount'] || 0;
      badsum += JSON.parse(localStorage.getItem(key))['badclickcount'] || 0;
  }

  if (goodsum >=1 || badsum >=1){
    document.getElementById('return').innerHTML = "Welcome back! You've had "+goodsum +" good and "+badsum +" bad days.";
    } else {
      document.getElementById('return').style.display="none";
    }
}

function bannerShowGood(){
  var goodsum = 0;
  var badsum = 0;

  for (var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);
      goodsum += JSON.parse(localStorage.getItem(key))['goodclickcount'] || 0;
      badsum += JSON.parse(localStorage.getItem(key))['badclickcount'] || 0;
  }

  if (goodsum >=1){
    document.getElementById('return').innerHTML = "Keep it up and stay positive!";
    } else {
      document.getElementById('return').style.display="none";
    }
}

function bannerShowBad(){
  var goodsum = 0;
  var badsum = 0;

  for (var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);
      goodsum += JSON.parse(localStorage.getItem(key))['goodclickcount'] || 0;
      badsum += JSON.parse(localStorage.getItem(key))['badclickcount'] || 0;
  }

  if (badsum >=1){
    document.getElementById('return').innerHTML = "That's okay. Let's come up with a plan to make things better.";
    } else {
      document.getElementById('return').style.display="none";
    }
}

/*
function bannerShowGood() {
  if (localStorage.goodclickcount >= 1) {
      document.getElementById('return').innerHTML = "Keep it up and stay positive! You've had "+localStorage.goodclickcount +" good days.";
    } else {
      document.getElementById('return').style.display="none";
    }
}

function bannerShowBad() {
  if (localStorage.badclickcount >= 1) {
      document.getElementById('return').innerHTML = "That's okay. Let's come up with a plan to make things better.";
    } else {
      document.getElementById('return').style.display="none";
    }
}
*/
