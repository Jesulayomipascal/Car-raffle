// Function to load the cart from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalTicketsElement = document.getElementById('total-tickets');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = '';
    let totalTickets = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(listItem);

        totalTickets += item.quantity;
        totalPrice += parseFloat(item.price.replace('R', '')) * item.quantity; // Ensure price is parsed as a float
    });

    totalTicketsElement.textContent = totalTickets;
    totalPriceElement.textContent = `R${totalPrice.toFixed(2)}`; // Format total price to 2 decimal places
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCart(); // Reload the cart to reflect the changes
}

// Load the cart when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadCart();

    // Attach event listener to the "Clear Cart" button
    const clearCartButton = document.getElementById('clear-cart-btn');
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
});
