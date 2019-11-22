// Day 40 - Promises

// Promises Made me Broken 
// https://www.codewars.com/kata/587593285448632b8d000143


function submitOrder(user) {
  let shoppingCart, zipCode, shippingRate, orderSuccessful;
  // Get the current user's shopping cart
  OrderAPI.getShoppingCartAsync(user)
    .then(function(cart) {
      shoppingCart = cart;
      return CustomerAPI.getProfileAsync(user);
    })
    // Also look up the ZIP code from their profile
    .then(function(profile) {
      zipCode = profile.zipCode;
    })
    // Calculate the shipping fees
    .then(function(calc) {
      shippingRate = calculateShipping(shoppingCart, zipCode);
      return OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
    })
    .then(function(success) {
      orderSuccessful = success;
    });
  // Submit the order
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}
