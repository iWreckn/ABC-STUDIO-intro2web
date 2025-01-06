// Cart functionality
let cart = [];

// Subscribe functionality
function handleSubscribe(event) {
    event.preventDefault();
    alert("Thank you for subscribing.");
}

// Add item to sessionStorage
function addToCart(item) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to the cart");
}

// View cart from sessionStorage
function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Cart is empty");
    } else {
        alert("Cart contains " + cart.length + " items: " + cart.join(", "));
    }
}

// Clear sessionStorage cart
function clearCart() {
    sessionStorage.removeItem('cart');
    alert("Cart cleared");
}

// Process order (clears cart)
function processOrder() {
    if (sessionStorage.getItem('cart')) {
        alert("Thank you for your order");
        sessionStorage.removeItem('cart');
    } else {
        alert("Cart is empty");
    }
}
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const orderInfo = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem('customOrder', JSON.stringify(orderInfo));
    alert("Thank you for your message. Your custom order is saved.");
}

// Event listeners setup
document.addEventListener('DOMContentLoaded', function() {
    // Subscribe form listener (present on all pages)
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', handleSubscribe);
    }

    // Gallery page listeners
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const viewCartButton = document.querySelector('#view-cart-btn');
    const clearCartButton = document.querySelector('#clear-cart-btn');
    const processOrderButton = document.querySelector('#process-order-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            addToCart(this.dataset.item);
        });
    });

    if (viewCartButton) {
        viewCartButton.addEventListener('click', viewCart);
    }

    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }

    if (processOrderButton) {
        processOrderButton.addEventListener('click', processOrder);
    }

    // Contact form listener
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});
