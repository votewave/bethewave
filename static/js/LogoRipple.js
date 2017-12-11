// rippling logo by rob brown, pianop.ly
LogoRipple = {
  lastRunTime: 0,

  run: function (container) {
    var currTime = new Date().getTime();
    if(currTime - this.lastRunTime < 1000) {
      return;
    }
    this.lastRunTime = currTime;

    var colors = [
        '255,0,0',
        '255,125,0',
        '239,255,0',
        '0,235,0',
        '0,120,255',
        '100,0,255',
        '255,0,0',
        '255,125,0',
        '239,255,0',
        '0,235,0',
        '0,120,255',
        '100,0,255'
      ],
      transitionEndName = ('WebkitTransition' in document.documentElement.style) ? 'webkitTransitionEnd' : 'transitionend',
      elems = container.getElementsByTagName('span'),
      index = 0,
      intervalHandle = setInterval(function() {
        if(index < elems.length) {
          var elem = elems[index];
            elem.addEventListener(transitionEndName, firstTransitionEnd, false);
            elem.style.color = 'rgb(' + colors[index % colors.length] + ')';
            elem.style.transform = 'scale3d(1.15,1.15,1.15)';
          index++;

          function firstTransitionEnd() {
              elem.style.color = '';
              elem.style.transform = '';
              elem.removeEventListener(transitionEndName, firstTransitionEnd, false);
          }
        } else {
          clearInterval(intervalHandle);
        }
      }, 50);
  }
};
