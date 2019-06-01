/*   
STICKY HEADER
*/

// Change navbar when scrolling
$(window).scroll(function(e){
    var scrollPos = $(window).scrollTop();
    if (scrollPos > 100) {
        $(".main-menu").addClass("nav-alt");
    } else {
        $(".main-menu").removeClass("nav-alt");
    }
});

/*   
MOBILE MENU
*/

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
/*   
FAKE FORM ERRORS HANDLING
*/

$("input[name=name]").on("input", function(e){
    e.preventDefault();
    var name = $("input[name=name]").val();

    if (RegExp(/^[a-zA-Z]{3,25}(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(name)) {
        $(".name-error").remove();
    } else {
        if ($(".name-error").text() === "") {
            var nameErr = $("<div class='form-error name-error'></div>");
            nameErr.text("Name should contain only letters and longer than 3 characters.");
    
            $("input[name=name]").after(nameErr);
        }
    }
});

$("input[name=email]").on("input", function (e) {
    e.preventDefault();
    var email = $("input[name=email]").val();

    if (RegExp(/^[a-zA-Z]{3,}\@[a-z0-9]{3,}\.[a-z]{2,5}$/).test(email)) {
        $(".email-error").remove();
    } else {
        if ($(".email-error").text() === "") {
            var emailErr = $("<div class='form-error email-error'></div>");
            emailErr.text("Invalid email format.");

            $("input[name=email]").after(emailErr);
        }
    }
});

$("input[name=phone]").on("input", function (e) {
    e.preventDefault();
    var phone = $("input[name=phone]").val();

    if (RegExp(/^[0-9]{6,12}$/).test(phone)) {
        $(".phone-error").remove();
    } else {
        if ($(".phone-error").text() === "") {
            var phoneErr = $("<div class='form-error phone-error'></div>");
            phoneErr.text("Use only numbers, between 6 and 12 figures.");

            $("input[name=phone]").after(phoneErr);
        }
    }
});

$("textarea[name=message]").on("input", function (e) {
    e.preventDefault();
    var message = $("textarea[name=message]").val();

    if (RegExp(/^.{3,}$/).test(message)) {
        $(".message-error").remove();
    } else {
        if ($(".message-error").text() === "") {
            var messageErr = $("<div class='form-error message-error'></div>");
            messageErr.text("Insert a message, please.");

            $("textarea[name=message]").after(messageErr);
        }
    }
});

$(".form-submit").click(function(e){
    e.preventDefault();
    if (
        ($("input[name=name]").val() !== "" && 
        $(".name-error").text() === "") &&
        ($("input[name=email]").val() !== "" &&
        $(".email-error").text() === "") && 
        ($("input[name=phone]").val() !== "" &&
        $(".phone-error").text() === "") && 
        ($("textarea[name=message]").val() !== "" &&
        $(".message-error").text() === ""))
        {
            var sendErr = $("<div class='form-error send-error'></div>");
            sendErr.text(`Sorry ${$("input[name=name]").val()}, the server is not working. Try again later.`);

            $(".form-submit").before(sendErr);
        }
});
    



// TODO: create yellow overlay for portfolio items with link on a new page