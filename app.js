const addItem = () => {
    const input = document.getElementById('input');
    const name = input.value;
    displayProduct(name);

    // add cart 

    // add storage 

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

