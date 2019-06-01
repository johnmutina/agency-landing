// Change navbar when scrolling
$(window).scroll(function(e){
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 100) {
        $(".main-menu").addClass("nav-alt");
    } else {
        $(".main-menu").removeClass("nav-alt");
    }
});

// Displays and hides mobile menu
$(".burger-button").click(function() {
    $(".burger-menu").slideToggle("hidden");
});

$(".burger-menu li").click(function() {
    $(".burger-menu").slideToggle("hidden");
});

// If logo gets clicked, menu closes
$(".nav-logo").click(function () {
    if ($(".burger-menu").css("display") != "none") {
        $(".burger-menu").slideToggle("hidden");
    }
});

// TODO: display form errors in html
// TODO: create yellow overlay for portfolio items with link on a new page