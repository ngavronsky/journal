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
  var valgood = 0;
  var valbad = 0;
  var goodsum = 0;
  var badsum = 0;

  for (var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);
      goodsum += JSON.parse(localStorage.getItem(key))['goodclickcount'];
      badsum += JSON.parse(localStorage.getItem(key))['badclickcount'];
  }

  if (goodsum >=1 || badsum >=1){
    document.getElementById('return').innerHTML = "Welcome back! You've had "+goodsum +" good days and "+badsum +" bad days.";
    } else {
      document.getElementById('return').style.display="none";
    }
}

/*
function bannerShowIndexToo(){
  var goodsum = 0;
  var badsum = 0;

if(localStorage.length > 0){
  for (var i = 0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var valgood = JSON.parse(localStorage.getItem(key))['goodclickcount'];
    var valbad = JSON.parse(localStorage.getItem(key))['badclickcount'];
    goodsum = valgood + 1;
    badsum = valbad + 1;
  }
    document.getElementById('return').innerHTML = "Welcome back! You've had "+goodsum +" good days and "+badsum +" bad days.";
    } else {
      goodsum = 0;
      badsum = 0;
      valgood = {};
      valbad = {};
      document.getElementById('return').style.display="none";
    }

}
*/

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
