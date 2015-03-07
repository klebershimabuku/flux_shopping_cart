var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  CART_ADD: null, // adds item to cart
  CART_REMOVE: null, // remove item from cart
  CART_VISIBLE: null, // shows or hide the cart
  SET_SELECTED: null, // selects a product option
  RECEIVE_DATA: null // loads our mock data
});
