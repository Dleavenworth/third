////////////
//This does not work never believe Alex again
/*$("a").click(function() {
  return $("html, body").animate({
  scrollTop: $($.attr(this, "href")).offset().top
  }, 500), window.location.hash = "", !1
  }), $(".scrollup").hide(), $(function() {
  $(window).scroll(function() {
  $(this).scrollTop() > 100 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
  })
  });*/

/*$('a').click(function(){
  $('html', 'body').animate({
  scrollTop: $($.attr(this, "href")).offset().top
  }, 500);
  });*/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html,body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
  }
  });
});
