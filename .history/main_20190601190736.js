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



$(".form-submit").click(function(e){
    // block HTML validation
    e.preventDefault();

    var name = $("input[name=name]").val();
    var email = $("input[name=email]").val();
    var phone = $("input[name=phone]").val();
    var message = $("textarea[name=message]").val();

    if (RegExp(/^[a-zA-Z]{5,25}$/).test(name)) {
        $(".name-error").remove();
    } else {
        if ($(".name-error").text() === "") {
            var nameErr = $("<div class='form-error name-error'></div>");
            nameErr.text("Name should contain only letters and be long between 5 and 25 characters.");
            
            $("input[name=name]").after(nameErr);
        }
    }

    if (RegExp(/^[.*]{3,}@[a-z0-9]{3,}\.[a-z]{2}$/).test(email)) {
        $(".email-error").remove();
    } else {
        if ($(".email-error").text() === "") {
            var emailErr = $("<div class='form-error email-error'></div>");
            emailErr.text("Invalid email format.");

            $("input[email=email]").after(emailErr);
        }
    }




});



// TODO: create yellow overlay for portfolio items with link on a new page



{/* <form class="contact-form">
<div class="form-flex">
    <div class="form-left">
        <input class="form-typography" type="text" name="name" id="name" required placeholder="Your Name *" oninvalid="this.setCustomValidity('Please enter your name')" oninput="this.setCustomValidity('')">
        <input class="form-typography" type="email" name="email" id="email" required placeholder="Your Email *">
        <input class="form-typography" type="tel" name="phone" id="phone" required placeholder="Your Phone *" oninvalid="this.setCustomValidity('Please enter your phone number')" oninput="this.setCustomValidity('')">
    </div>
    <div class="form-right">
        <textarea class="form-typography" name="message" id="message" cols="30" rows="10" required placeholder="Your Message *" oninvalid="this.setCustomValidity('Please enter your message')" oninput="this.setCustomValidity('')"></textarea>
    </div>
    <!-- TODO: Handle errors in sending message -->
    <!-- TODO: Remove standard behavior of refreshing -->
</div>
<button class="form-submit button-big" type="submit">Send Message</button>
</form> */}