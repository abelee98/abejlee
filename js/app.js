$(document).ready(scroll_nav)
$(window).scroll(scroll_nav)

function scroll_nav() {
    var scrollLink = $('.scroll');
    var scrollTop = 0
    scrollTop = $(window).scrollTop();
    console.log(scrollTop)
    
    if (scrollTop > 100) {
      console.log("greater")
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
    // // Smooth scrolling
    // scrollLink.click(function(e) {
    //   e.preventDefault();
    //   $('html, body').animate({
    //     scrollTop: $(this.hash).offset().top
    //   }, 1000);
    // });
    
}