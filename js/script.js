function addToCart(artworkId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(artworkId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function confirmOrder() {
    document.getElementById('confirmation').style.display = 'block';
    localStorage.removeItem('cart');
}
