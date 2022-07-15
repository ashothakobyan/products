import { useReducer } from "react";
import "./App.css";
import Checkout from "./Checkout";
import { getProducts } from "./dataService";
import { initialState, ProductsContext } from "./slicer/Context";
import { reducer } from "./slicer/Store";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    products: state.products,
    showLoadingState: state.showLoadingState,
    orederedProducts: state.orederedProducts,
    changeLoadingState: () => {
      dispatch({
        type: "CHANGE_LOADING_STATE",
      });
    },
    setProducts: (products) => {
      dispatch({
        type: "SET_PRODUCTS",
        products: products,
      });
    },
  };
  return (
    <div className="App">
      <ProductsContext.Provider value={value}>
        <Checkout />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
