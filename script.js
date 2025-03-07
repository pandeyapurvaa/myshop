// Sample product data
const products = [
    {
        id: 1,
        name: "Smartphone X",
        price: 999.99,
        description: "Latest smartphone with advanced features and high-performance camera.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
        details: "The Smartphone X features a 6.7-inch OLED display, 5G connectivity, and a powerful processor. It comes with 256GB of storage and 8GB of RAM. The device includes a triple-camera system with 48MP main sensor, 12MP ultra-wide, and 8MP telephoto lenses. The battery capacity is 4500mAh with fast charging support."
    },
    {
        id: 2,
        name: "Laptop Pro",
        price: 1499.99,
        description: "High-performance laptop for professionals and content creators.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
        details: "The Laptop Pro is equipped with the latest processor, 16GB RAM, and 512GB SSD storage. It features a 15.6-inch 4K display with 100% sRGB color accuracy. The laptop includes a dedicated graphics card for smooth performance in demanding applications."
    },
    {
        id: 3,
        name: "Wireless Headphones",
        price: 199.99,
        description: "Premium wireless headphones with noise cancellation.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
        details: "These wireless headphones offer active noise cancellation, 30-hour battery life, and premium sound quality. They feature touch controls, voice assistant support, and comfortable over-ear design."
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 299.99,
        description: "Fitness tracking smartwatch with health monitoring features.",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop",
        details: "The Smart Watch includes heart rate monitoring, sleep tracking, and various workout modes. It has a 1.4-inch AMOLED display, water resistance, and 5-day battery life."
    },
    {
        id: 5,
        name: "Tablet Air",
        price: 799.99,
        description: "Lightweight tablet perfect for entertainment and productivity.",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
        details: "The Tablet Air features a 10.9-inch Retina display, powerful processor, and all-day battery life. It supports the latest stylus input and comes with 128GB of storage."
    },
    {
        id: 6,
        name: "Camera Pro",
        price: 1299.99,
        description: "Professional mirrorless camera for photography enthusiasts.",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=500&fit=crop",
        details: "This mirrorless camera features a 24.2MP sensor, 4K video recording, and advanced autofocus system. It includes in-body image stabilization and weather-sealed construction."
    },
    {
        id: 7,
        name: "Gaming Console",
        price: 499.99,
        description: "Next-gen gaming console for immersive gaming experience.",
        image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop",
        details: "The gaming console supports 4K gaming, ray tracing, and high frame rates. It comes with a wireless controller and 1TB SSD storage."
    },
    {
        id: 8,
        name: "Smart Speaker",
        price: 149.99,
        description: "Voice-controlled smart speaker with premium sound quality.",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop",
        details: "This smart speaker features high-quality audio output, voice assistant integration, and multi-room audio support. It includes built-in microphones for voice commands."
    },
    {
        id: 9,
        name: "External SSD",
        price: 199.99,
        description: "Fast and portable external SSD for data storage.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
        details: "The external SSD offers 1TB of storage with USB 3.0 connectivity. It features shock resistance and compact design for easy portability."
    },
    {
        id: 10,
        name: "Wireless Mouse",
        price: 79.99,
        description: "Ergonomic wireless mouse for comfortable computing.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
        details: "This wireless mouse features ergonomic design, precise tracking, and long battery life. It includes programmable buttons and smooth scrolling."
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('productsContainer');
    if (productsContainer) {
        displayProducts(products);
    }

    // Add input event listener for real-time search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            searchProducts();
        });
    }
});

// Display products on the products page
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;

    productsContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="showProductDetails(${product.id})">See Details</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Search products
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}">
            
            <div class="product-info">
                <p><strong>Price:</strong> $${product.price}</p>
                <p>${product.description}</p>
            </div>

            <div class="product-specs">
                <h3>Key Features</h3>
                <ul>
                    <li>${product.details.split('.')[0]}</li>
                    <li>${product.details.split('.')[1]}</li>
                    <li>${product.details.split('.')[2]}</li>
                </ul>

                <h3>Product Details</h3>
                <ul>
                    <li>Model: ${product.name}</li>
                    <li>Category: Electronics</li>
                    <li>Warranty: 1 Year</li>
                    <li>Free Shipping</li>
                </ul>
            </div>

            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="window.location.href='product-details.html?id=${product.id}'">View Full Details</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

// Add to cart functionality
function addToCart(productId) {
    alert('Product added to cart!');
    // Implement cart functionality here
}

// Update product color
function updateProductColor() {
    const colorSelect = document.getElementById('colorSelect');
    if (!colorSelect) return;

    const selectedColor = colorSelect.value;
    if (selectedColor) {
        alert(`Color changed to ${selectedColor}`);
        // Implement color change functionality here
    }
}

// Load product details on the product details page
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productImage').src = product.image;
    }
}

// Initialize product details page
if (window.location.pathname.includes('product-details.html')) {
    loadProductDetails();
} 