// ========== PART 1: VARIABLES, DATA TYPES & CONDITIONALS ==========
const pricePerItem = 100; // constant price per item

// Function to validate input values
function validateInputs(name, items) {
    if (name.trim() === "") {
        console.log("Name cannot be empty.");
        return false;
    }
    if (isNaN(items) || items <= 0) {
        console.log("Please enter a valid number of items.");
        return false;
    }
    return true;
}

// ========== PART 2: FUNCTIONS ==========
function calculateTotal(items) {
    return items * pricePerItem;
}

function displayResult(name, total) {
    const output = document.getElementById("output");
    output.textContent = name + ", your total cost is: " + total;
}

// ========== PART 3: LOOPS ==========
const sampleItems = ["Apples", "Bananas", "Oranges", "Mangoes"];
const itemList = document.getElementById("itemList");

// Using a for loop to list items
for (let i = 0; i < sampleItems.length; i++) {
    const li = document.createElement("li");
    li.textContent = sampleItems[i];
    itemList.appendChild(li);
}

// Using a while loop to log items to console
let index = 0;
while (index < sampleItems.length) {
    console.log("Item " + (index + 1) + ": " + sampleItems[index]);
    index++;
}

// ========== PART 4: DOM INTERACTIONS ==========
const button = document.getElementById("calculateBtn");

button.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const items = parseInt(document.getElementById("items").value);

    // Validate inputs before proceeding
    if (!validateInputs(name, items)) {
        document.getElementById("output").textContent = "Please enter valid details.";
        return;
    }

    // Calculate and display total cost
    const total = calculateTotal(items);
    displayResult(name, total);

    console.log("Calculation complete for " + name);
});