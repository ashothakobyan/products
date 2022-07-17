export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LOADING_STATE":
      return {
        ...state,
        showLoadingState: !state.showLoadingState,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.products,
      };
    case "ADD_ORDER":
      const addedProduct = state.products.find(
        (product) => product.id === action.id
      );

      const newAddedProduct = { ...addedProduct };
      newAddedProduct.availableCount = newAddedProduct.availableCount - 1;
      const newProducts = [...state.products];

      newProducts.splice(action.index, 1, newAddedProduct);

      const orderProductIndex = state.orderedProducts.findIndex(
        (product) => product.id === action.id
      );
      const newOrderedProducts = [...state.orderedProducts];
      if (orderProductIndex !== -1) {
        const cloneOrderedProduct = {
          ...newOrderedProducts[orderProductIndex],
        };
        cloneOrderedProduct.quantity =
          newOrderedProducts[orderProductIndex].quantity + 1;
        newOrderedProducts[orderProductIndex] = cloneOrderedProduct;
      } else {
        const orderedProduct = {
          id: action.id,
          quantity: 1,
          name: newAddedProduct.name,
          price: newAddedProduct.price,
        };
        newOrderedProducts.push(orderedProduct);
        newProducts[action.index].removeButtonState = true;
      }
      if (newProducts[action.index].availableCount === 0) {
        newProducts[action.index].addButtonState = false;
      }
      return {
        ...state,
        products: newProducts,
        orderedProducts: newOrderedProducts,
        totalPrice: state.totalPrice + action.price,
      };

    case "REMOVE_ORDER":
      const cloneOrdered = [...state.orderedProducts];
      const cloneOrder = {
        ...cloneOrdered.find((product) => product.id === action.id),
      };
      const OrderIndex = cloneOrdered.findIndex(
        (product) => product.id === action.id
      );
      const cloneProducts = [...state.products];
      const productIndex = cloneProducts.findIndex(
        (product) => product.id === action.id
      );
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

      return {
        ...state,
        orderedProducts: cloneOrdered,
        totalPrice: state.totalPrice - action.price,
        products: cloneProducts,
      };

    default:
      return state;
  }
};
