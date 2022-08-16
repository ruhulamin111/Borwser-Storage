const addItem = () => {
    const input = document.getElementById('input');
    const name = input.value;

    // add to ui 
    displayProduct(name);

    // add to local storage
    addToCart(name);

    input.value = '';
}

const displayProduct = (name) => {
    const products = document.getElementById('products');
    const product = document.createElement('li');
    product.innerText = name;
    products.appendChild(product);
};

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    }
    else {
        cartObject = {};
    }
    return cartObject;
};

const addToCart = (name) => {
    const cart = getCart();
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
};

const loadFromStorage = () => {
    const cart = getCart();
    for (const item in cart) {
        displayProduct(item);
    }
}
loadFromStorage();
