
  // 封装动画的函数
function animate(element, target) {
  // 通过判断，保证页面上只有一个定时器在执行动画
  if (element.timerId) {
    clearInterval(element.timerId);
    element.timerId = null;
  }

  element.timerId = setInterval(function () {
    // 步进  每次移动的距离
    var step = 10;
    // 盒子当前的位置
    var current = element.offsetLeft;
    // 当从400 到 800  执行动画
    // 当从800 到 400  不执行动画

    // 判断如果当前位置 > 目标位置 此时的step  要小于0
    if (current > target) {
      step = - Math.abs(step);
    }

    // Math.abs(current - target)   <= Math.abs(step)
    if (Math.abs(current - target)   <= Math.abs(step)) {
      // 让定时器停止
      clearInterval(element.timerId);
      // 让盒子到target的位置
      element.style.left = target + 'px';
      return;
    }
    // 移动盒子
    current += step;
    element.style.left = current + 'px';
  }, 5);
}

//获取元素
var box = document.getElementById('box');
var screen = document.getElementById('screen');
var ul = screen.getElementsByTagName('ul')[0];
var lis = ul.children;
var ol = screen.getElementsByTagName('ol')[0];
var indexGlobal = 0; // 记录当前展示的是第几张图片
//arr
var arr = document.getElementById('arr');
var arrLeft = document.getElementById('left');
var arrRight = document.getElementById('right');

//根据图片数量动态创建li(底下的数字提示),放入ol中
for (i = 0, leng = lis.length; i < leng; i++) {
  var li = document.createElement('li');
  
  // li.innerText = i + 1;
  li.onclick = liClick;//给每个li创建点击事件
  li.setAttribute('index', i);//给每个li一个编号
  ol.appendChild(li);
  ol.children[0].className = 'current';
}
//点击li时高亮 需排他
function liClick() {
  for (var i = 0; i < ol.children.length; i++) {
    ol.children[i].className = '';
  }
  this.className = 'current';

  //对应的下标和图片
  //图片移动的距离 = li的索引 * 图片的宽
  var target = this.getAttribute('index') * screen.offsetWidth;
//    ul.style.left = -target + 'px';
  //indexGlobal 记录第几张图
  indexGlobal = +this.getAttribute('index');
  animate(ul, -target);
}

//鼠标移入显示箭头 移出隐藏箭头
box.onmouseenter = function () {
  arr.style.display = 'block';
  //进入时自动轮播停止
  clearInterval(timerId);
}
box.onmouseleave = function () {
  arr.style.display = 'none';
  //出来是继续自动轮播
  timerId = setInterval(function () {
    arrRight.onclick();
  },3000)
}
//右侧点击按钮
//克隆一个第一张图 用来做轮播最后一个
ul.appendChild(lis[0].cloneNode(true));
arrRight.onclick = function () {
  //判断是否为最后一个图片
  if (indexGlobal === ol.children.length) {
    //如果是最后一张 换成第一张
    ul.style.left = '0px';
    //初始化 从头计数
    indexGlobal = 0;
  }
  indexGlobal++;
//    图片移动的距离
  var target = indexGlobal * screen.offsetWidth;
//    如果图片没有到最后
  if (indexGlobal < ol.children.length) {
    //调用函数
    ol.children[indexGlobal].onclick();
  } else {
    animate(ul, -target);
    //排他
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    //最后一张图片 让第一个高亮
    ol.children[0].className = 'current';
  }
//    animate(ul,-target);
}

//点击左面箭头让图片向左
arrLeft.onclick = function () {
  if (indexGlobal === 0) {
    ul.style.left = -ol.children.length * screen.offsetWidth + 'px';
    indexGlobal = ol.children.length;
  }

  indexGlobal--;
  ol.children[indexGlobal].onclick();

}
//自动轮播
timerId = setInterval(function () {
    arrRight.onclick();
  },3000)

