# Credit Score Application
This repository contains code for a credit score application. The application allows users to input their personal information and calculates their credit score based on various factors. Additionally, it provides functionality to save the application data and display a review message.

Functionality
The code in this repository provides the following functionality:

Validation: The validateApplication() function checks if all required fields are filled and if the input values are valid. It verifies that the input:

Does not have empty or null required fields.
Contains valid annual income and loan amount numbers greater than zero.
Represents a valid date of birth and ensures the applicant is at least 18 years old.
Contains only letters and spaces for loan type, loan purpose, and full name.
Ensures the loan amount is less than or equal to the annual income.
Requires the applicant to indicate employment status if they have loans or credit cards.
Verifies that the loan amount is a multiple of 1000.
Saving Application: The saveApplication() function collects the user's input values and saves them in the browser's local storage as a JSON string.

Credit Score Calculation: The calculateCreditScore() function calculates the credit score based on the user's input values. It considers factors such as full name, annual income, employment status, presence of kids, loans, credit cards, and loan amount. The function returns the credit score as a numerical value.

Event Handling: The code attaches an event listener to the submit button (submitButton). When clicked, the application performs the following actions:

Retrieves the input values from the form fields.
Validates the input using the validateApplication() function.
If the input is valid, saves the application using the saveApplication() function.
Calculates the credit score using the calculateCreditScore() function.
Generates a review message based on the credit score.
Updates the review text on the page with the generated message.
Usage
To use the credit score application, open the index.html file in a web browser. Fill out the required fields in the form, and click the submit button to see the generated review message and credit score.

Ensure that JavaScript is enabled in your web browser.

Contributing
Contributions to this repository are welcome. If you encounter any issues or have suggestions for improvements, please open an issue on the issue tracker.

If you would like to contribute to the codebase, please fork the repository and create a pull request with your proposed changes.

License
This project is licensed under the MIT License.
