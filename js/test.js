$(document).ready(scroll_nav)
$(window).scroll(scroll_nav)
$(".see-more").click(function() {
  var offset = 50;
  $('html,body').animate({
      scrollTop: $(".about").offset().top - offset},'slow');
});
var scrollLink = $('.scroll');

// Smooth scrolling
scrollLink.click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 50
    }, 1000);
});
function scroll_nav() {
    var scrollTop = 0
    scrollTop = $(window).scrollTop();
    
    if (scrollTop > 100) {
      $('#navbar').addClass('scroll_nav')
      $('.scroll').css({
        "color": "#474547"
      })
      $('.navbar').css({
        "padding-top": "10px"
      })
    } else if (scrollTop < 100) {
      $('#navbar').removeClass('scroll_nav')
      $('.scroll').css({
        "color": "white",
        "padding-top": "0px",
        "padding-bottom": "0px",
      })
      $('.navbar').css({
        "padding-top": "40px"
      })
    }
}