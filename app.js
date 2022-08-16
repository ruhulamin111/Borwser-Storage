// get item form client 
const addItem = () => {
    const input = document.getElementById('input');
    const name = input.value;
    if (name === '') {
        return;
    };
    // add to ui 
    displayProduct(name);
    // add to local storage
    addToCart(name);
    // clear input value 
    input.value = '';
};
// display product on ui 
const displayProduct = (name) => {
    const products = document.getElementById('products');
    const product = document.createElement('li');
    product.innerText = name;
    products.appendChild(product);
};
// get element from storage 
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObject;
    if (cart) {
        cartObject = JSON.parse(cart);
    }
    else {
        cartObject = {};
    };
    return cartObject;
};
// set to storage data 
const addToCart = (name) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    };
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
};
// load previous data from storage 
const loadFromStorage = () => {
    const cart = getCart();
    for (const item in cart) {
        displayProduct(item);
    };
};
loadFromStorage();
// place order and remove data from ui and storage 
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
};
