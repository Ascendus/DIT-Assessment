/**
 * Empty variable.
 * @type {number}
 * @var
 */
var subVar;

/**
 * Initiates the loader and webpage.
 * @function 
 * @type {void}
 */
function activateWebpage() {
    subVar = setTimeout(showPage, 3000); // Changing the value for the subVar variable

    /**
     * The current array of emails saved to the local storage.
     * @type {string[]}
     */
    const emailArray = JSON.parse(localStorage.getItem("emails"));
    console.log(emailArray); // Logs the array to the console
};

/**
 * Hides the loader and activates the web page.
 * @function
 * @type {void}
 */
function showPage() {
    document.getElementById("loader").style.display = "none"; // Hides the loader
    document.getElementById("header-nav").style.display = "block"; // Shows the navigation bar
    document.getElementById("content").style.display = "block"; // Shows the rest of the page
    document.getElementById("footer") .style.display = "block"; // Shows the footer
    console.log("Page loaded.");
};

console.log("Gladon Chua Website Resume - Website assets loaded"); // Logs a message to the developer console to alert that the website has loaded