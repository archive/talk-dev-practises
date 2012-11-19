var Product = function (name, price) {
  this.name = name;
  this.price = price;
};

var Order = function () {
  this.products = []; 
  this.discount = 1;
};
Order.prototype.addProduct = function(product) {
  this.products.push(product);
};
Order.prototype.setDiscount = function(discount) {
  this.discount = discount;
};

var Util = {
  calculateTotalPrice : function (order) {
    var totalPrice = 0;
    order.products.forEach(function (product) {
      totalPrice += product.price;
    });
    totalPrice = totalPrice * order.discount;    
    return totalPrice;
  }
};

var product1 = new Product('Product1', 100);
var product2 = new Product('Product2', 200);

var order = new Order();
order.addProduct(product1);
order.addProduct(product2);
order.setDiscount(0.9);

var totalPrice = Util.calculateTotalPrice(order);
console.log(totalPrice);