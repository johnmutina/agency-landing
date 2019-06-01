// TODO: reduce navbar when scrolling
// var scrollPos = document.documentElement.scrollTop;
// console.log(scrollPos);

// if (scrollPos > 10) {
//     alert("scroll!");
// }

$(window).scroll(function(e){
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 100) {
        $(".main-menu").removeClass("nav-start").animate({
            display: "none"
        }, 500);
        $(".main-menu").addClass("nav-alt");
    } else {
        $(".main-menu").removeClass("nav-alt");
        $(".main-menu").addClass("nav-start");
    }
});

// TODO: display and hide burger menu when available
// TODO: display form errors in html
// TODO: create yellow overlay for portfolio items with link on a new page