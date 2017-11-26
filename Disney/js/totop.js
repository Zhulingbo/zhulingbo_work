/**
 * Created by lxh on 2017/11/25.
 */
var totop = document.getElementsByClassName('to_top')[0];
//监听滚动
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    $(totop).fadeIn(1000);
    totop.style.display = 'block';
  } else {
    $(totop).fadeOut(1000);
    totop.style.display = 'none';

  }

};
//添加点击事件
totop.onclick = function () {
//    document.documentElement.scrollTop = 0;
  setTimeout(function () {
      var step = 100;
      id = setInterval(function () {
          if (document.documentElement.scrollTop <= 0) {
              document.documentElement.scrollTop = 0;
              clearInterval(id);
          }
          document.documentElement.scrollTop -= step;
          if ($('.to_top .main').offset().top < 200) {
              $('.to_top').children('.main').removeClass('zhuan');
              console.log(123);
          }
      }, 20)
  },400)
};
