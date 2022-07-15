import { act } from "@testing-library/react";

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
      const productIndex = state.products.find(
        (product) => product.id === action.id
      );
      const newProducts = { ...state.products };
      newProducts[productIndex].availableCount =
        newProducts[productIndex].availableCount - 1;

      const orderProductIndex = state.orederedProducts.find(
        (product) => product.id === action.id
      );
      const newOrderedProducts = { ...state.orederedProducts }
      if (orderProductIndex) {
        
        newOrderedProducts[orderProductIndex].quantity =
          newOrderedProducts[orderProductIndex].quantity + 1;
      } else {
        const orderedProduct = {
          id: action.id,
          quantity: 0,
          name: newProducts[productIndex].name,
          price: newProducts[productIndex].price,
        };
        newOrderedProducts.push(orderedProduct)
      }

      return {
        ...state,
        products: newProducts,
        orederedProducts: newOrderedProducts
      };
    default:
      return state;
  }
};
