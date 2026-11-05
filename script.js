// ==========================
// Part 1: Date Display
// ==========================

// getting today's date first, then grabbing the parts we need
const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();

// putting it together like MM/DD/YYYY so it matches the assignment
const todayMessage = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = todayMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// these are just a few example values to see what Number() does with them
const visorPrice = "42";
const cyberTopPrice = "19.75";
const notAPrice = "hello";
const collarPrice = "100";

// turning each string into a number
const convertedVisorPrice = Number(visorPrice);
const convertedCyberTopPrice = Number(cyberTopPrice);
const convertedNotAPrice = Number(notAPrice);
const convertedCollarPrice = Number(collarPrice);

// checking if the converted values are NaN or whole numbers
const visorIsNaN = Number.isNaN(convertedVisorPrice);
const visorIsInteger = Number.isInteger(convertedVisorPrice);

const cyberTopIsNaN = Number.isNaN(convertedCyberTopPrice);
const cyberTopIsInteger = Number.isInteger(convertedCyberTopPrice);

const notAPriceIsNaN = Number.isNaN(convertedNotAPrice);
const notAPriceIsInteger = Number.isInteger(convertedNotAPrice);

const collarIsNaN = Number.isNaN(convertedCollarPrice);
const collarIsInteger = Number.isInteger(convertedCollarPrice);

// showing the original value and what happened after converting it
const numberResults =
    '<article class="result-card"><p class="output-label">TEST 01</p><h3>Visor price</h3><p>Original: "' + visorPrice + '"</p><p>Converted: ' + convertedVisorPrice + '</p><p>isNaN: ' + visorIsNaN + '</p><p>isInteger: ' + visorIsInteger + '</p></article>' +
    '<article class="result-card"><p class="output-label">TEST 02</p><h3>Cybertop price</h3><p>Original: "' + cyberTopPrice + '"</p><p>Converted: ' + convertedCyberTopPrice + '</p><p>isNaN: ' + cyberTopIsNaN + '</p><p>isInteger: ' + cyberTopIsInteger + '</p></article>' +
    '<article class="result-card"><p class="output-label">TEST 03</p><h3>Not a price</h3><p>Original: "' + notAPrice + '"</p><p>Converted: ' + convertedNotAPrice + '</p><p>isNaN: ' + notAPriceIsNaN + '</p><p>isInteger: ' + notAPriceIsInteger + '</p></article>' +
    '<article class="result-card"><p class="output-label">TEST 04</p><h3>Collar price</h3><p>Original: "' + collarPrice + '"</p><p>Converted: ' + convertedCollarPrice + '</p><p>isNaN: ' + collarIsNaN + '</p><p>isInteger: ' + collarIsInteger + '</p></article>';

document.getElementById("numberConversionOutput").innerHTML = numberResults;


// ==========================
// Part 3: Math and Formatting
// ==========================

// pretend these are a few items in a Pound Industries order
const visorCost = 42.00;
const collarCost = 19.75;
const shippingCost = 5.00;
const taxRate = 0.095;

// adding the item prices, then working out tax and the final total
const subtotal = visorCost + collarCost;
const taxAmount = subtotal * taxRate;
const orderTotal = subtotal + taxAmount + shippingCost;

// toFixed(2) keeps the money amounts looking like normal prices
const mathResults =
    '<p class="output-label">SAMPLE ORDER TOTAL</p>' +
    '<div class="math-line"><span>Tech visor</span><strong>$' + visorCost.toFixed(2) + '</strong></div>' +
    '<div class="math-line"><span>Cyber collar</span><strong>$' + collarCost.toFixed(2) + '</strong></div>' +
    '<div class="math-line"><span>Subtotal (addition)</span><strong>$' + subtotal.toFixed(2) + '</strong></div>' +
    '<div class="math-line"><span>Tax (multiplication)</span><strong>$' + taxAmount.toFixed(2) + '</strong></div>' +
    '<div class="math-line"><span>Shipping</span><strong>$' + shippingCost.toFixed(2) + '</strong></div>' +
    '<div class="math-line total-line"><span>Order total</span><strong>$' + orderTotal.toFixed(2) + '</strong></div>';

document.getElementById("mathOutput").innerHTML = mathResults;


// ==========================
// Part 4: Conditionals
// ==========================

// first check: the word "hello" should not count as a real number
let invalidMessage = "";

if (Number.isNaN(convertedNotAPrice)) {
    invalidMessage = "the value hello isn't a number, so it can't be used as a price.";
} else {
    invalidMessage = "this value can be used as a number.";
}

// second check: the visor price should be a whole number
let integerMessage = "";

if (Number.isInteger(convertedVisorPrice)) {
    integerMessage = "the visor value is a whole number.";
} else {
    integerMessage = "the visor value has a decimal.";
}

// adding both messages to the number section so they show on the page too
document.getElementById("numberConversionOutput").innerHTML +=
    '<div class="check-note"><p class="output-label">QUICK CHECKS</p><p>' + invalidMessage + '</p><p>' + integerMessage + '</p></div>';
