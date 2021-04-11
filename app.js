// import functions and grab DOM elements
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
const removeCartItem = document.getElementsByClassName('danger');

for (var i = 0; i < removeCartItem.length; i++) { 
    const button = removeCartItem[i];
    button.addEventListener('click', function(event) {
        const buttonClicked = event.target;
        button.clicked.parentElement.parentElement.remove();
        updateCartTotal()
    });
    }
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) { 
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-price')[0];
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.nodeValue;
        total = total + (price * quantity)
}
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;

console.log(removeCartItem);
// initialize state

// set event listeners to update state and DOM