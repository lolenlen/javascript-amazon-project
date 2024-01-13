import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { cart } from '../data/cart.js';
import { getProduct } from '../data/products.js';


export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-return-to-home-link')
    .innerHTML = cartQuantity + " item(s)";
}

window.addEventListener('message', function(event) {
  if (event.data === 'updatePage') {
    // Update the first element
    document.querySelector('.js-return-to-home-link').innerHTML = cartQuantity + 'item(s)';
  }
});


renderOrderSummary();
renderPaymentSummary();
updateCartQuantity();

