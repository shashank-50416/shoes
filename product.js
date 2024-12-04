// Function to add product to cart
function addToCart(button) {
    const card = button.closest('.card');
    const productImage = card.querySelector('img').src; // Correct way to access image source
    const productId = card.dataset.id;
    const productName = card.querySelector('h3').textContent;
    const productPrice = parseFloat(card.querySelector('.price').textContent.replace('$', ''));

    const product = { id: productId, name: productName, price: productPrice, image: productImage }; // Add image to the product object

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.dataset.id = item.id;

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto; margin-right: 10px;"> <!-- Display the image here -->
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button onclick="removeItemFromCart('${item.id}')">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

// Function to remove item from the cart
function removeItemFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCartItems = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    updateCartDisplay();
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
