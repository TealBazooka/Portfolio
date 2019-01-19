// toggle hamburger menu
//my icon changing fuction
var swapMenuIcon = function swapMenuIcon() {
    //get the hamburger menu button
    var menuButton = document.getElementById("hamburgerButton");
    if (!menuButton.classList.contains('collapsed')) {
        
        $("#bars").attr("class", "fas fa-bars");
    }
    else {
        console.log("got here");
        $("#bars").attr("class", "fas fa-times");
    }
}
//Listeners for changing icon
$("#hamburgerButton").on("click", swapMenuIcon );
$(".nav-link").on("click", swapMenuIcon );

// collapse dropdown hamburger menu on link click
$(".nav-link").on("click", function() {
    $('.collapse').collapse('hide');
});

// My sticky nav code (for mobile compatibility)
window.onscroll = function() {stickElement()};
// Get the navbar
var navbar = document.getElementById("stickyNav");
var stickySpacer = document.getElementById("stickySpacer");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickElement() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    stickySpacer.classList.remove("hide");
  } else {
    navbar.classList.remove("sticky");
    stickySpacer.classList.add("hide");
  }
}