const addItem = () => {
    const input = document.getElementById('input');
    const name = input.value;
    const products = document.getElementById('products');
    const product = document.createElement('li');
    products.appendChild(product);
    // add cart 

    // add storage 

    input.value = '';
}