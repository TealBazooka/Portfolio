// collapse dropdown hamburger menu on link click
$(".nav-link").on("click", function() {
    $('.collapse').collapse('hide');
});

// toggle hamburger menu
$("#bars").on("click", function() {
    if ($(this).attr("class") == "fas fa-bars") {
        $(this).attr("class", "fas fa-times");
    }
    else {
        $(this).attr("class", "fas fa-bars");
    }
});

// My sticky nav code (for mobile compatibility)
