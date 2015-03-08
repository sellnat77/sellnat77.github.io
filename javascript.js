// JavaScript Document
$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        $('.header').css("opacity", 1);
    }
    else{
        $('.header').css("opacity", 0);
    }
});
