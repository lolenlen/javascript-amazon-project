import { addToCart, loadFromStorage, cart } from "../../data/cart.js";


///test coverage = how much of the code is being tested-best to max it
//flaky test= test that sometimes passes. sometimes fails 
//to solve this u need to use a =Mock=

describe('test suite: addToCart', () => {
  it('adds an existing product to the cart', () => {
    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: '1111',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });

    loadFromStorage();

    addToCart('1111');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('1111');
    expect(cart[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('adds a new product to the cart', () => {
    spyOn(localStorage, 'setItem')

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });

    loadFromStorage();

    addToCart('1111');
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual('1111');
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});