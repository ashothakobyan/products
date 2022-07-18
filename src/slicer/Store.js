import { addOrder } from "../helperFunction/addOrder";
import { removeOrder } from "../helperFunction/removeOrder";

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
      const { newProducts, newOrderedProducts, newTotalPriceAdd } = addOrder(
        action.id,
        action.index,
        state.products,
        state.orderedProducts,
        state.totalPrice,
        action.price
      );
      return {
        ...state,
        products: newProducts,
        orderedProducts: newOrderedProducts,
        totalPrice: newTotalPriceAdd,
      };

    case "REMOVE_ORDER":
      const { cloneOrdered, cloneProducts, newTotalPriceRemove } = removeOrder(
        state.orderedProducts,
        action.id,
        state.products,
        state.totalPrice,
        action.price
      );

      return {
        ...state,
        orderedProducts: cloneOrdered,
        totalPrice: newTotalPriceRemove,
        products: cloneProducts,
      };

    default:
      return state;
  }
};
