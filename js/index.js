var isTitleL=false;
window.onscroll = function(e) {
  e.preventDefault();
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  //title-block
  if (scrolled>904){
    isTitleL=true;
    $( ".header" ).addClass("header-after");
  }
  else {
    isTitleL=false;
    $( ".header" ).removeClass("header-after");
  }
lastScroll=scrolled;
for(var i=0;i<$('section').length-1;i++){
  if ($('section')[i].offsetTop <=scrolled+document.documentElement.clientHeight/2 || scrolled+document.documentElement.clientHeight==document.documentElement.scrollHeight) indexOfPage=i;
}
  AnimateBlock(indexOfPage);
}