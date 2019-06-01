// CHANGE NAVBAR WHEN SCROLLING
$(window).scroll(function(e){
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 100) {
        $(".main-menu").removeClass("nav-start");
        $(".main-menu").addClass("nav-alt");
    } else {
        $(".main-menu").removeClass("nav-alt");
        $(".main-menu").addClass("nav-start");
    }
});

// TODO: display and hide burger menu when available
$(".burger-button").click(function (e) {
    console.log("burger");
});

// TODO: display form errors in html
// TODO: create yellow overlay for portfolio items with link on a new page