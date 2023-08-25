window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment


function setupIntialValues() {
  //create object of the initial val.
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };
  //retreve the DOM input from the UI  ~DONE
  let loanAmount= document.getElementById("loan-amount");
  //set the input values equal to the objects properties. 
  loanAmount.value = values.amount;
  let termInYears = document.getElementById("loan-years");
  termInYears.value = values.years;
  let yearlyRate = document.getElementById("loan-rate");
  yearlyRate.value = values.rate;
// Get the current values from the UI ~DONE
// Update the monthly payment
  update();
}

function update() {
// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.

let currentUIValues =getCurrentUIValues();
updateMonthly(calculateMonthlyPayment(currentUIValues));
};


function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12; //calc % then multiply to 12
  let n = (values.years *12);
  return (
    (values.amount * monthlyRate) /
    (1 - Math.pow((1 + monthlyRate), -n)) //pow is math method for power. 
  ).toFixed(2) //ensures 2 decimal places.
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPay = document.getElementById("monthly-payment");
  monthlyPay.innerText = "$"+monthly;
}
