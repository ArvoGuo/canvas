 var obj = document.getElementByIdx_x_x_x_x_x_x('id');
  obj.addEventListener('touchmove', function(event) 
  { // 如果这个元素的位置内只有一个手指的话
        if (event.targetTouches.length == 1) 
  {
    var touch = event.targetTouches[0];
      // 把元素放在手指所在的位置
      obj.style.left = touch.pageX + 'px';
         obj.style.top = touch.pageY + 'px';
    }
}, false);