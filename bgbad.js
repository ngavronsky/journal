function randomBg() {
  var backgrounds = [
    'images/bg_bad_1.jpg',
    'images/bg_bad_2.jpg',
    'images/bg_bad_3.jpg',
    'images/bg_bad_4.jpg',
    'images/bg_bad_5.jpg'
  ];

$('body').css({
    'background' : 'url('+ backgrounds[Math.floor(Math.random() * backgrounds.length)] + ') no-repeat',
    'background-size' : 'cover'
  });
}

randomBg();
