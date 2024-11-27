// Sample products array
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        img: "https://static.nbastore.in/resized/500X500/561/nike-air-max-impact-4-basketball-shoes-blackwhite-black-6690bcc500383.jpg",
        description: "Experience unparalleled comfort and performance with Nike Air Max."
    },
    {
        id: 2,
        name: "Adidas UltraBoost",
        price: 140,
        img: "https://static.nbastore.in/resized/500X500/777/jordan-stay-loyal-3-sneakers-whiteblackgym-red-white-67442cda8be21.jpg",
        description: "Step up your game with the ultimate cushioning and design of Adidas UltraBoost."
    },
    {
        id: 3,
        name: "JORDAN MAX AURA 6",
        price: 180,
        img: "https://static.nbastore.in/resized/700X700/778/jordan-max-aura-6-sneakers-whiteblack-white-67442700bac96.jpg",
        description: "Experience unparalleled comfort and performance with Nike Air Max."
    },
    {
        id: 4,
        name: "CONVERSE ALL STAR BB SHIFT CX",
        price: 100,
        img: "https://static.nbastore.in/resized/700X700/746/converse-all-star-bb-shift-cx-whiteblack-white-672b107676304.jpg",
        description: "CONVERSE offers exceptional performance and style."
    },
    {
        id: 5,
        name: "NIKE G.T. CUT 3 EP",
        price: 200,
        img: "https://static.nbastore.in/resized/500X500/730/nike-gt-cut-3-ep-basketball-shoes-royal-pulsewhite-blue-672235aeca222.jpg",
        description: "Classic style with modern comfort, Reebok Classic Leather shoes."
    },
    {
        id: 6,
        name: "NIKE IMPACT 4 ",
        price: 140,
        img: "https://static.nbastore.in/resized/500X500/728/nike-impact-4-basketball-shoes-light-lemon-twistdark-raisinwhite-light-lemon-6722354fa81a4.png",
        description: "Stylish and comfortable sneakers from New Balance."
    },
    {
        id: 7,
        name: "Jordan",
        price: 250,
        img: "https://static.nbastore.in/resized/500X500/728/nike-impact-4-basketball-shoes-light-lemon-twistdark-raisinwhite-light-lemon-6722354fa81a4.png",
        description: "Classic style with modern comfort, Reebok Classic Leather shoes."
    },
    {
        id: 8,
        name: "AIR JORDAN LEGACY 312",
        price: 290,
        img: "https://static.nbastore.in/resized/500X500/709/air-jordan-legacy-312-low-sneakers-white-white-670571c6be125.jpg",
        description: "Stylish and comfortable sneakers "
    },
    {
        id: 9,
        name: "JORDAN MAX AURA 6",
        price: 90,
        img: "https://static.nbastore.in/resized/500X500/712/jordan-max-aura-6-shoes-black-black-67055a478ec7d.jpg",
        description: "Classic style with modern comfort,"
    },
    {
        id: 10,
        name: "NIKE JA 1 'SCRATCH' EP",
        price: 240,
        img: "https://static.nbastore.in/resized/500X500/691/nike-ja-1-scratch-ep-basketball-shoes-white-white-66fa96aea04c4.jpg",
        description: "Stylish and comfortable sneakers from New Balance."
    },
    {
        id: 11,
        name: "NIKE JA 1 EP",
        price: 230,
        img: "https://static.nbastore.in/resized/500X500/460/nike-ja-1-ep-basketball-shoes-beige-beige-6638fcebf3b54.jpg",
        description: "Classic style with modern comfort, Reebok Classic Leather shoes."
    },
    {
        id: 12,
        name: "UA CURRY 1 LOW FLOTRO LUX",
        price: 260,
        img: "https://static.nbastore.in/resized/500X500/700/ua-curry-1-low-flotro-lux-basketball-shoes-grey-grey-6717db744de2b.jpg",
        description: "Stylish and comfortable sneakers from New Balance."
    },
    {
        id: 13,
        name: "NIKE KD17 'PENNY' EP ",
        price: 300,
        img: "https://static.nbastore.in/resized/500X500/711/nike-kd17-penny-ep-basketball-shoes-white-white-670570b07538b.jpg",
        description: "These shoes combine the lightweight, grippy speed of the Curry 10's UA Flow cushioning with the feel of the snug upper of your favorite Curry 1. Why? Because this unreal combination will keep you one step ahead throughout your entire game."
    },
    {
        id: 14,
        name: "NIKE LEBRON WITNESS 8 EP ",
        price: 140,
        img: "https://static.nbastore.in/resized/500X500/734/nike-lebron-witness-8-ep-basketball-shoes-navy-blueuniversity-gold-navy-blue-67444fdacbc64.jpg",
        description: "Stylish and comfortable sneakers from New Balance."
    },
    {
        id: 15,
        name: "JORDAN LUKA 3 PF",
        price: 230,
        img: "https://static.nbastore.in/resized/500X500/741/jordan-luka-3-pf-basketball-shoes-chlorine-bluehyper-pinkblack-blue-6722398e40b34.jpg",
        description: "Classic style with modern comfort, Reebok Classic Leather shoes."
    },
    {
        id: 16,
        name: "NIKE LEBRON XXI PREMIUM EP",
        price: 0,
        img: "https://static.nbastore.in/resized/500X500/609/nike-lebron-xxi-premium-ep-basketball-shoes-navy-blue-navy-blue-669e02ea78c2c.jpg",
        description: "Stylish and comfortable sneakers from New Balance."
    },
];


// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}


// Load cart items from localStorage
function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.dataset.id = item.id;

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.name;
        img.height = 50;
        img.width = 50;

        const name = document.createElement('span');
        name.textContent = item.name;

        const price = document.createElement('span');
        price.textContent = `$${item.price}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            removeItemFromCart(item.id);
        };

        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(price);
        itemDiv.appendChild(removeBtn);
        cartContainer.appendChild(itemDiv);

        total += item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

// Remove item from cart
function removeItemFromCart(itemId) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    loadCart(); // Reload cart after removal
}

// Call loadCart when the page loads
loadCart();
