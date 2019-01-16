$("#myLogo").on("click", function() {
    $("#myLogo").addClass("backFlip");
})

$("#myLogo").on("animationend", function() {
    $("#myLogo").removeClass("backFlip");
})