export const addOrder = (
  id,
  index,
  products,
  orderedProducts,
  totalPrice,
  price
) => {
  const addedProduct = products.find((product) => product.id === id);

  const newAddedProduct = { ...addedProduct };
  newAddedProduct.availableCount = newAddedProduct.availableCount - 1;
  const newProducts = [...products];

  newProducts.splice(index, 1, newAddedProduct);

  const orderProductIndex = orderedProducts.findIndex(
    (product) => product.id === id
  );
  const newOrderedProducts = [...orderedProducts];
  if (orderProductIndex !== -1) {
    const cloneOrderedProduct = {
      ...newOrderedProducts[orderProductIndex],
    };
    cloneOrderedProduct.quantity =
      newOrderedProducts[orderProductIndex].quantity + 1;
    newOrderedProducts[orderProductIndex] = cloneOrderedProduct;
  } else {
    const orderedProduct = {
      id: id,
      quantity: 1,
      name: newAddedProduct.name,
      price: newAddedProduct.price,
    };
    newOrderedProducts.push(orderedProduct);
    newProducts[index].removeButtonState = true;
  }
  if (newProducts[index].availableCount === 0) {
    newProducts[index].addButtonState = false;
  }

  const newTotalPriceAdd = totalPrice + price;

  return {
    newTotalPriceAdd,
    newOrderedProducts,
    newProducts,
  };
};
