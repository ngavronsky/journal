function randomBg() {
  var backgrounds = [
    'images/bg_good_1.jpg',
    'images/bg_good_2.jpg',
    'images/bg_good_3.jpg',
    'images/bg_good_4.jpg',
    'images/bg_good_5.jpg'
  ];

$('body').css({
    'background' : 'url('+ backgrounds[Math.floor(Math.random() * backgrounds.length)] + ') no-repeat',
    'background-size' : 'cover'
  });
}

randomBg();
