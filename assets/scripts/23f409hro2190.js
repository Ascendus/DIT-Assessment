/**
 * Inserts emails for the email newsletter subscription from the form input into an email array saved to the local storage
 * @async
 * @function
 * @returns {void}
 */
const addEmail = async () => {
    /**
     * The array of emails of subscribed users saved in <Window>.localStorage.
     * @type {string[]}
     */
    const emailArray = JSON.parse(localStorage.getItem("emails"));

    /**
     * The signup form HTML element.
     * @type {HTMLElement}
     */
    const signupForm = document.getElementById("signupform");

    /**
     * The success message to be displayed on subscription success.
     * @type {HTMLElement}
     */
    const successModal = document.getElementById("signupsuccess");

    /**
     * The input/email collected from the sign up form input.
     * @type {string}
     */
    const email = document.getElementById("signupinput").value; 

    if (emailArray !== null && emailArray.includes(email)) { 
        return console.log(`[ Local Storage ] Error: Email '${email}' already exists in local storage.`); // Checks if the email already exists in the local storage
    } else {
        /**
         * The array with the email value input.
         * @type {string[]}
         */
        const addedEmailArray = [email]; 

        /**
         * The new array of emails.
         * @type {string[]}
         */
        const newArray = emailArray === null ? addedEmailArray : emailArray.concat(addedEmailArray); 

        localStorage.setItem("emails", JSON.stringify(newArray)); // Sets the new array to the local storage
        
        signupForm.onsubmit = async () => { 
            successModal.style.display = "block"; // Displays the success message
        }; 

        return console.log(`[ Local Storage ] Successfully inserted new email '${email}' to local storage.`); // Success message
    };
};  