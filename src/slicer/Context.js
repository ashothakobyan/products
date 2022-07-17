import { createContext } from "react";

export const initialState = {
  products: [],
  showLoadingState: true,
  orderedProducts: [],
  totalPrice: 0,
};
export const ProductsContext = createContext();
