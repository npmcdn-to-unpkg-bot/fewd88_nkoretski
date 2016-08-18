

$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
        $('body').addClass('header-fixed');
    } else {
        $('body').removeClass('header-fixed');
    }
    
    var topOffset = $('#capital').offset().top;
    var headerHeight = $('#top-nav').height();
    var transitionPoint = topOffset - headerHeight;
    if (scrollTop > transitionPoint) {
        $('#top-nav').addClass('alt-header');
    } else {
        $('#top-nav').removeClass('alt-header');
    }
  });
});



