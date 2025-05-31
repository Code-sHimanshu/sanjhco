// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Cart Counter (Example)
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('a[href="cart.html"]').textContent = `CART (${cartCount})`;
    });
});

// Cart Logic
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update Cart Count
function updateCartCount() {
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}

// Add to Cart
function addToCart(productId = '1', productName = 'THAIDER TRAINST', price = 250) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id: productId, name: productName, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Render Cart Items
function renderCart() {
    const cartItemsEl = document.getElementById('cart-items');
    if (!cartItemsEl) return;

    cartItemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h3>${item.name}</h3>
            <p>$${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
    `).join('');

    // Update Total
    document.getElementById('total-price').textContent = 
        cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
});

// Update auth link based on login state
function updateAuthLink() {
    const authLink = document.getElementById('auth-link');
    if (authLink) {
        authLink.textContent = currentUser ? 'ACCOUNT' : 'LOGIN';
        authLink.href = currentUser ? 'account.html' : 'login.html';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
    updateAuthLink(); // Add this line
});