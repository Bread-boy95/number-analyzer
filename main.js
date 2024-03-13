// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  //   document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.

function getSign(numInput) {
  if (numInput > 0) {
    return "Positive";
  }
  if (numInput == 0) {
    return "Zero";
  }
  if (numInput < 0) {
    return "Negative";
  }
}

function evenOrOdd(numInput) {
  numInput = numInput % 2;
  //   console.log(numInput);
  if (numInput % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function multipleOf10(numInput) {
  numInput = numInput % 10;
  if (numInput == 0) {
    return "True";
  } else {
    return "False";
  }
}

function numDigits(numInput) {
  let num = numInput.toString();
  return num.length;
}
