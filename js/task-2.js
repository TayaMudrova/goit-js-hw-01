let country = 'Ukraine';
let price = 100;
let deliveryFee = 50;

function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;

  return (message = `Shipping to ${country} will cost ${totalPrice} credits`);
}
