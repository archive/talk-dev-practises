var calculatePrice = function (price, quantity, customerStatus) {
  console.log('calculate price');
  var totalPrice = price * quantity;
  totalPrice = adjustBasedOnCustomerStatus(totalPrice, customerStatus);
  return totalPrice;
};

var adjustBasedOnCustomerStatus = function (totalPrice, customerStatus) {
  console.log('adjust price');
  if (customerStatus === 'VIP') {
    console.log('adjust price for VIP');
    totalPrice = totalPrice * 0.9;
  }
  return totalPrice;
};
        
var price = 3.14;
var quantity = 1337;
var customerStatus = 'VIP';

calculatePrice(price, quantity, customerStatus);
console.log('calculation done');