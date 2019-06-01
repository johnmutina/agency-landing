// CHANGE NAVBAR WHEN SCROLLING
$(window).on("resize scroll", function(e){
    var scrollPos = $(window).scrollTop();
    var windowSize = $(window).width();
    if (windowSize > 1000) {
        if (scrollPos > 100) {
            $(".main-menu").removeClass("nav-start");
            $(".main-menu").addClass("nav-alt");
        } else {
            $(".main-menu").removeClass("nav-alt");
            $(".main-menu").addClass("nav-start");
        }
    } else { // If window is smaller than 1000px
        $(".main-menu").removeClass("nav-start");
        $(".main-menu").addClass("nav-alt");
    }
});

// TODO: display and hide burger menu when available
$(".burger-button").click(function() {
    
});

// TODO: display form errors in html
// TODO: create yellow overlay for portfolio items with link on a new page