function calculateDiscount(price, isMember, hasCoupon) {

  let discount = 0;

  if (isMember) {
    discount = price * 0.1;
  }

  if (hasCoupon) {
    discount += 5;
  }

  if (price > 100 && discount > 20) {
    discount = 20;
  }
  return price - discount;
}





