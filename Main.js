// Function to validate the application
function validateApplication() {
  // Retrieve input values
  let loanType = document.getElementById("loanApplications").value;
  let fullName = document.getElementById("inputName").value;
  let dobMonth = document.getElementById("inputDoBMonth").value;
  let dobDay = document.getElementById("inputDoBDay").value;
  let dobYear = document.getElementById("inputDoBYear").value;
  let annualIncome = parseFloat(document.getElementById("inputAnnualIncome").value);
  let isEmployed = document.getElementById("IsEmployed").checked;
  let hasKids = document.getElementById("HasKids").checked;
  let hasLoans = document.getElementById("HasLoans").checked;
  let hasCreditCards = document.getElementById("HasCreditCards").checked;
  let loanPurpose = document.getElementById("inputLoanPurpose").value;
  let loanAmount = parseFloat(document.getElementById("inputLoanAmount").value);

  // Check if required fields are not empty or null
  if (!loanType || !fullName || !dobMonth || !dobDay || !dobYear || !annualIncome || !loanPurpose || !loanAmount) {
    return false;
  }

  // Check if annual income and loan amount are valid numbers
  if (isNaN(annualIncome) || isNaN(loanAmount) || annualIncome <= 0 || loanAmount <= 0) {
    return false;
  }

  // Check if date of birth is a valid date and the applicant is at least 18 years old
  let dob = new Date(`${dobMonth}/${dobDay}/${dobYear}`);
  let eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  if (isNaN(dob.getTime()) || dob > eighteenYearsAgo) {
    return false;
  }

  // Check if loan type, loan purpose, and full name contain only letters and spaces
  let nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(fullName) || !nameRegex.test(loanType) || !nameRegex.test(loanPurpose)) {
    return false;
  }

  // Check if loan amount is less than or equal to the annual income
  if (loanAmount > annualIncome) {
    return false;
  }

  // Check if the applicant has indicated employment status if they have loans or credit cards
  if ((hasLoans || hasCreditCards) && !isEmployed) {
    return false;
  }

  // Check if the loan amount is a multiple of 1000
  if (isNaN(loanAmount) || loanAmount % 1000 !== 0) {
    return false;
  }

  // All checks passed, return true to indicate that the input is valid
  return true;
}
//function to collect/save application
function saveApplication() {
  // Object to store the inputs
  let applicationInfo = {
    loanType: document.getElementById("loanApplications").value,
    fullName: document.getElementById("inputName").value,
    dobMonth: document.getElementById("inputDoBMonth").value,
    dobDay: document.getElementById("inputDoBDay").value,
    dobYear: document.getElementById("inputDoBYear").value,
    annualIncome: document.getElementById("inputAnnualIncome").value,
    isEmployed: document.getElementById("IsEmployed").checked,
    hasKids: document.getElementById("HasKids").checked,
    hasLoans: document.getElementById("HasLoans").checked,
    hasCreditCards: document.getElementById("HasCreditCards").checked,
    loanPurpose: document.getElementById("inputLoanPurpose").value,
    loanAmount: document.getElementById("inputLoanAmount").value
  };


  if (Object.keys(applicationInfo).length === 0) {
    return;
  }

  localStorage.setItem("applicationInfo", JSON.stringify(applicationInfo));
}

// Get the submit button
const submitButton = document.getElementById("submitButton");

// Event listener
submitButton.addEventListener("click", function(event) {

    // Retrieve input values
    let loanType = document.getElementById("loanApplications").value;
    let fullName = document.getElementById("inputName").value;
    let dobMonth = document.getElementById("inputDoBMonth").value;
    let dobDay = document.getElementById("inputDoBDay").value;
    let dobYear = document.getElementById("inputDoBYear").value;
    let annualIncome = parseFloat(document.getElementById("inputAnnualIncome").value);
    let isEmployed = document.getElementById("IsEmployed").checked;
    let hasKids = document.getElementById("HasKids").checked;
    let hasLoans = document.getElementById("HasLoans").checked;
    let hasCreditCards = document.getElementById("HasCreditCards").checked;
    let loanPurpose = document.getElementById("inputLoanPurpose").value;
    let loanAmount = parseFloat(document.getElementById("inputLoanAmount").value);

    if (validateApplication()) {
      // Check if required fields are not empty or null
      if (!loanType || !fullName || !dobMonth || !dobDay || !dobYear || !annualIncome || !loanPurpose || !loanAmount) {
        return false;
      }
      
  // Check if annual income and loan amount are valid numbers
  if (isNaN(annualIncome) || isNaN(loanAmount) || annualIncome <= 0 || loanAmount <= 0) {
    return false;
  }

  // Check if date of birth is a valid date and the applicant is at least 18 years old
  let dob = new Date(`${dobMonth}/${dobDay}/${dobYear}`);
  let eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  if (isNaN(dob.getTime()) || dob > eighteenYearsAgo) {
    return false;
  }

  // Check if loan type, loan purpose, and full name contain only letters and spaces
  let nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(fullName) || !nameRegex.test(loanType) || !nameRegex.test(loanPurpose)) {
    return false;
  }

  // Check if loan amount is less than or equal to the annual income
  if (loanAmount > annualIncome) {
    return false;
  }

  // Check if the applicant has indicated employment status if they have loans or credit cards
  if ((hasLoans || hasCreditCards) && !isEmployed) {
    return false;
  }

  // Check if the loan amount is a multiple of 1000
  if (isNaN(loanAmount) || loanAmount % 1000 !== 0) {
    return false;
  }

  // All checks passed, return true to indicate that the input is valid
  return true
    };
  
    saveApplication();

    // Calculate credit score
    let creditScore = calculateCreditScore(fullName, annualIncome, isEmployed, hasKids, hasLoans, hasCreditCards, loanAmount);

    // Generate review message
    let reviewText = `Dear ${fullName}, Your Credit Score is ${creditScore}`;

    // Set the review text
    document.getElementById("reviewText").textContent = reviewText;
  }
);


//to check the credit score

function calculateCreditScore (fullName,annualIncome,isEmployed,hasKids,hasLoans,hasCreditCards,loanAmount){
//base credit score

let creditScore = 25;
if (/\b(MD|ph\.D|Dr\.)\b/i.test(fullName)){

creditScore += 5;
}else{
creditScore -= 3;
}

if (fullName === '') {
return undefined;
}

if(annualIncome < loanAmount){
creditScore -= 5;
}else {
  creditScore += 3;
}

if (isEmployed){
creditScore += 5;
}else{
creditScore -= 3;
}

if (hasKids){
creditScore += 5;
}else{
creditScore -= 3;
}

if (hasLoans){
creditScore += 5;
}else{
creditScore -= 3;
}

if (hasCreditCards){
creditScore += 5;
}else{
creditScore -= 3;
}

if (loanAmount > 10000){
creditScore += 5;
}else{
creditScore -= 3;
}

return creditScore;
}


