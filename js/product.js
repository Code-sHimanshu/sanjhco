// Sample product data (replace with actual products)
const products = [
    { id: '1', name: 'THAIDER TRAINST', price: 250, image: 'images/thaider-trainst.jpg', category: 'men' },
    { id: '2', name: 'RECORD SNEAKERS', price: 220, image: 'images/womens-sneakers.jpg', category: 'women' },
    { id: '3', name: 'GIFT HAMPER', price: 180, image: 'images/gift-hamper.jpg', category: 'gifts' },
];

// Render products with search/filter
function renderProducts(productList = products) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = productList.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart('${product.id}', '${product.name}', ${product.price})">ADD TO CART</button>
        </div>
    `).join('');
}

// Search function
function filterProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
}

// Initialize
document.addEventListener('DOMContentLoaded', renderProducts);