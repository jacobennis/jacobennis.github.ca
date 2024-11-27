// Get the modal element and the button to show the modal
const modal = document.getElementById('login-modal');
const btn = document.getElementById('show-login');
const closeBtn = document.querySelector('.close-modal');

// When the "Admin Login" button is clicked, show the modal
btn.onclick = function() {
    modal.style.display = 'flex';  // Show the modal (flex to center it)
}

// When the close button (×) is clicked, hide the modal
closeBtn.onclick = function() {
    modal.style.display = 'none';  // Hide the modal
}

// Close the modal if the user clicks outside the modal content area
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';  // Hide the modal
    }
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = cart.length;
    document.getElementBy
// Function to add product to cart
function addToCart(product) {
    // Retrieve the cart from localStorage, or initialize an empty array if not found
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex === -1) {
        // If the product isn't in the cart, add it with a quantity of 1
        product.quantity = 1;
        cart.push(product);
    } else {
        // If the product is already in the cart, increment its quantity
        cart[existingProductIndex].quantity += 1;
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart item count in the main page
    updateCartCount();
}

// Function to update the cart count in the header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Add event listeners for the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.getAttribute('data-name');
        const productPrice = parseFloat(productCard.getAttribute('data-price'));

        // Create the product object
        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };

        // Add the product to the cart
        addToCart(product);
    });
});

// Update the cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

// Redirect to the Cart Page when the Cart button is clicked
document.getElementById('cart-link').addEventListener('click', () => {
    window.location.href = 'cart.html'; // Redirect to the cart page
});

  