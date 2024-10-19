document.getElementById('pizzaOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = validateForm();
    if (isValid) {
        alert("Thank you for your pizza order! Your delivery is on its way!");
        saveOrderData();  // Save to local storage (optional but i did it)
    }
});

function validateForm() {
    let isValid = true;
    
    if (!validateName()) isValid = false;
    if (!validateLocation()) isValid = false;
    if (!validateToppings()) isValid = false;
    if (!validateDate()) isValid = false;

    return isValid;
}

// Validate Name/Personal Infomation
function validateName() {
    const name = document.getElementById('userName').value;
    const errorElement = document.getElementById('errorName');
    
    if (name.trim() === '') {
        errorElement.textContent = "Please enter your name.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Validate Address/Location
function validateLocation() {
    const location = document.getElementById('deliveryLocation').value;
    const errorElement = document.getElementById('errorLocation');
    
    if (location.trim() === '') {
        errorElement.textContent = "Please enter your delivery address.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// Validate Toppings for PIZZA (at least one checkbox should be selected)
function validateToppings() {
    const toppings = document.getElementsByName('toppings');
    const errorElement = document.getElementById('errorToppings');
    
    for (let topping of toppings) {
        if (topping.checked) {
            errorElement.textContent = "";
            return true;
        }
    }
    errorElement.textContent = "Please select at least one topping.";
    return false;
}

// Validate Delivery Date
function validateDate() {
    const date = document.getElementById('deliveryDate').value;
    const errorElement = document.getElementById('errorDate');
    
    if (date === '') {
        errorElement.textContent = "Please select a delivery date.";
        return false;
    } else {
        errorElement.textContent = "";
        return true;
    }
}

// save order data in local storage
function saveOrderData() {
    const orderData = {
        userName: document.getElementById('userName').value,
        deliveryLocation: document.getElementById('deliveryLocation').value,
        deliveryDate: document.getElementById('deliveryDate').value
    };
    localStorage.setItem('pizzaOrderData', JSON.stringify(orderData));
}
