function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
        total += item.price;
    });
    document.getElementById('cart-total').textContent = total;
}
