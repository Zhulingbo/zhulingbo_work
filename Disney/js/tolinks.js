//.h_shopping 商店 1 .h_happyArea 乐园 2 .happyArea_title 影视 4
var links = $('#nav li')
console.log(links[1]);
console.log(links[2]);
console.log(links[4]);

//添加点击事件
links[0].onclick = function () {
  var step = 100;
  var id = setInterval(function () {
    if (document.documentElement.scrollTop <= 0) {
      document.documentElement.scrollTop = 0;
      clearInterval(id);
    }
    document.documentElement.scrollTop -= step;
    //$('.h_shopping').addClass('animated')
  }, 20)
}
//商店
links[1].onclick = function () {
  var step = 100;
  var id = setInterval(function () {
    var a = document.documentElement.scrollTop
    var b = $('.h_shopping').offset().top - 100;
    if (Math.abs(a - b) <= step) {
      a = b;
      clearInterval(id);
    }
    if (a < b) {
      document.documentElement.scrollTop += step;
      console.log(a);
    }
    if (a > b) {
      document.documentElement.scrollTop -= step;
      console.log(a);
    }
    $('.h_shopping').addClass('bounceInLeft');
  }, 20)
}
//乐园
links[2].onclick = function () {
  var step = 100;
  var id = setInterval(function () {
    var a = document.documentElement.scrollTop
    var b = $('.h_happyArea').offset().top
    if (Math.abs(a - b) <= step) {
      a = b;
      clearInterval(id);
    }
    if (a < b) {
      document.documentElement.scrollTop += step;
    } else {
      document.documentElement.scrollTop -= step;
    }
    $('.h_happyArea').addClass('tada');
  }, 20)
}
//影视
links[4].onclick = function () {
  var step = 100;
  var id = setInterval(function () {
    var a = document.documentElement.scrollTop
    var b = $('.Ts').offset().top
    if (Math.abs(a - b) <= step) {
      a = b;
      clearInterval(id);
    }
    if (a < b) {
      document.documentElement.scrollTop += step;
    } else {
      document.documentElement.scrollTop -= step;
    }
    $('.anim').addClass('rubberBand');
  }, 20)
}



