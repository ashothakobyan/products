import { createContext } from "react";

export const initialState = {
  products: [],
  showLoadingState: true,
  orederedProducts: [],
};
export const ProductsContext = createContext();
