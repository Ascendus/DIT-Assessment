/**
 * The number the slide is on.
 * @var
 * @type {number}
 */
var slideIndex = 1;
showSlides(slideIndex); // Calls the showSlides function

/**
 * Increments/decrements (swtiches the slide) the slide index.
 * @function
 * @param {number} n The increment/decrement value to add to the slide index
 */
function plusSlides(n) {
    showSlides(slideIndex += n); // Calls the showSlides function
};

/**
 * The function for showing the current slide.
 * @function
 * @param {number} n The slide index for the slide to display
 */
function showSlides(n) {
    /**
     * Empty variable.
     * @type {number}
     * @var
     */
    var i;

    /**
     * The slideshow element div in the HTML.
     * @constant
     * @type {HTMLCollectionOf<Element>}
     */
    const slides = document.getElementsByClassName("projectslideshow");

    if (n > slides.length) {
        slideIndex = 1;  // Edits the slideIndex variable value to 1 if the number parameter is bigger than the number of slides in the slideshow
    };

    if (n < 1) {
        slideIndex = slides.length; // Edits the slideIndex variable to the number of slides in the slidshow if the number parameter is smaller than 1
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // For each slide exlcuding the current slide, makes them hidden
    };

    slides[slideIndex-1].style.display = "block"; // Makes the current slide visible
};