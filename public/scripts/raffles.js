// Initialize an empty cart
let cart = [];

// Initialize an empty participants list
let participants = JSON.parse(localStorage.getItem('participants')) || [];

// Function to add an item to the cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    updateCartInLocalStorage();
}

// Function to add a participant to the raffle
function addParticipant(name, email, phone, raffleName, quantity) {
    for (let i = 0; i < quantity; i++) {
        participants.push({ name, email, phone, raffleName });
    }
    updateParticipantsInLocalStorage();
}

// Function to update the cart in localStorage
function updateCartInLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to update participants in localStorage
function updateParticipantsInLocalStorage() {
    localStorage.setItem('participants', JSON.stringify(participants));
}

// Function to update the cart count icon
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Update the cart count on page load and after adding items
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    const buyButtons = document.querySelectorAll('.raffle-item-btn');
    buyButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const raffleItem = button.closest('.raffle-item');
            const name = raffleItem.querySelector('.raffle-item-title').textContent;
            const price = raffleItem.querySelector('.raffle-item-price').textContent;
            const quantityInput = raffleItem.querySelector('.raffle-item-quantity');
            const quantity = parseInt(quantityInput.value, 10) || 1; // Default to 1 if input is empty or invalid
            addToCart({ name, price, quantity });
            updateCartCount(); // Update the cart count after adding an item

            const raffleName = name;

            // Prompt user for their details
            const participantName = prompt("Enter your name:");
            const email = prompt("Enter your email:");
            const phone = prompt("Enter your phone number:");

            if (participantName && email && phone) {
                addParticipant(participantName, email, phone, raffleName, quantity);
                alert(`${quantity} ticket(s) purchased for ${raffleName}!`);
            } else {
                alert("Ticket purchase canceled. Please provide all details.");
            }
        });
    });
});
