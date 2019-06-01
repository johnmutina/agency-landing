// TODO: reduce navbar when scrolling
// var scrollPos = document.documentElement.scrollTop;
// console.log(scrollPos);

// if (scrollPos > 10) {
//     alert("scroll!");
// }

$(window).scroll(function(e){
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 100) {
        // console.log("sticky!");
        $(".nav-start").addClass(".nav-alt");
        $(".nav-start").removeClass(".nav-start");
    } else {
        $(".nav-start").addClass(".nav-alt");
        $(".nav-start").removeClass(".nav-start"); 
    }
});

// TODO: display and hide burger menu when available
// TODO: display form errors in html
// TODO: create yellow overlay for portfolio items with link on a new page