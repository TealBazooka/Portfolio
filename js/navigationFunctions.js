// collapse dropdown hamburger menu on link click
$(".nav-link").on("click", function() {
    $('.collapse').collapse('hide');
});

// toggle hamburger menu
$("#hamburgerButton").on("click", function() {
    if ($("#bars").attr("class") == "fas fa-bars") {
        $("#bars").attr("class", "fas fa-times");
    }
    else if ($("#bars").attr("class") == "fas fa-times") {
        $("#bars").attr("class", "fas fa-bars");
    }
});

// My sticky nav code (for mobile compatibility)
