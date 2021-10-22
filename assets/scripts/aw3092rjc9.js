/**
 * The number the slide is on.
 * @type {number}
 * @var
 */
var slideIndex = 1;
showDivs(slideIndex); // Calls the showDivs function

/**
 * Increments/decrements (swtiches the slide) the slide index.
 * @function
 * @param {number} n The increment/decrement value to add to the slide index
 */
function plusDivs(n) {
    showDivs(slideIndex += n); // Calls the showDivs function
};

/**
 * Returns to the current slide.
 * @function
 * @param {number} n The slide index
 */
function currentDiv(n) {
    showDivs(slideIndex = n); // Calls the showDivs function
};

/**
 * The function for showing the current slide.
 * @function
 * @param {number} n The slide index for the slide to display
 */
function showDivs(n) {
    /**
     * Empty variable.
     * @type {number}
     * @var
     */
    var i;

    /**
     * The HTML slides division/group.
     * @type {HTMLCollectionOf<Element>}
     */
    var x = document.getElementsByClassName("slides");

    /**
     * The dots for changing the slides and displaying the current slide.
     * @type {HTMLCollectionOf<Element>}
     */
    var dots = document.getElementsByClassName("demo");

    if (n > x.length) { 
        slideIndex = 1; // Checks if the number parameter is bigger than the number of slideshow slides and if so changes the slideIndex variable to 1 
    };

    if (n < 1) { 
        slideIndex = x.length; // Checks if the number parameter is smaller than 1 and if so changes the slideIndex variable to the number of slideshow slides
    };

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // Hides the other slides 
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-primary", ""); // Changes the dots to show the current slide
    };

    x[slideIndex - 1].style.display = "block"; // Shows the current slide
    dots[slideIndex - 1].className += " w3-primary"; // Changes the current slide dot to indicate the current slide
};

var slideIndex = 0;
carousel(); // Calls the carousel function

/**
 * The automatic slide switch function.
 * @function
 */
function carousel() {
    /**
     * Empty variable.
     * @type {number}
     * @var
     */
    var i;

    /**
     * The HTML slides division/group.
     * @type {HTMLCollectionOf<Element>}
     */
    var x = document.getElementsByClassName("slides");

    /**
     * The dots for changing the slides and displaying the current slide.
     * @type {HTMLCollectionOf<Element>}
     */
    var dots = document.getElementsByClassName("demo");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; // Hides the other slides 
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-primary", ""); // Changes the dots to show the current slide
    };

    slideIndex++; // Incerements the slideIndex value by one

    if (slideIndex > x.length) {
        slideIndex = 1; // Changes the slide index to 1 if the slide index is bigger than the length of slideshow slides
    };

    x[slideIndex - 1].style.display = "block"; // Shows the current slide
    dots[slideIndex - 1].className += " w3-primary"; // Changes the current slide dot to indicate the current slide
    setTimeout(carousel, 10000); // Changes the slides every 10 seconds
};