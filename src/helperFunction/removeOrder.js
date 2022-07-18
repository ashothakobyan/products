export const removeOrder = (
  orderedProducts,
  id,
  products,
  totalPrice,
  price
) => {
  const cloneOrdered = [...orderedProducts];
  const cloneOrder = {
    ...cloneOrdered.find((product) => product.id === id),
  };
  const OrderIndex = cloneOrdered.findIndex((product) => product.id === id);
  const cloneProducts = [...products];
  const productIndex = cloneProducts.findIndex((product) => product.id === id);
  const cloneProduct = { ...cloneProducts[productIndex] };
  if (cloneProduct.availableCount === 0) {
    cloneProduct.addButtonState = true;
  }

  cloneProduct.availableCount = cloneProduct.availableCount + 1;

  if (cloneOrder.quantity > 1) {
    cloneOrder.quantity = cloneOrder.quantity - 1;
    cloneOrdered[OrderIndex] = cloneOrder;
  } else {
    cloneOrdered.splice(OrderIndex, 1);
    cloneProduct.removeButtonState = false;
  }
  cloneProducts.splice(productIndex, 1, cloneProduct);
  const newTotalPriceRemove = totalPrice - price;

  return {
    cloneOrdered,
    cloneProducts,
    newTotalPriceRemove,
  };
};
