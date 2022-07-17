import { useReducer } from "react";
import "./App.css";
import Checkout from "./Checkout";
import { initialState, ProductsContext } from "./slicer/Context";
import { reducer } from "./slicer/Store";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    products: state.products,
    showLoadingState: state.showLoadingState,
    orderedProducts: state.orderedProducts,
    totalPrice: state.totalPrice,
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
    addOrder: (id, index, price) => {
      dispatch({
        type: "ADD_ORDER",
        id: id,
        index: index,
        price: price,
      });
    },
    removeOrder: (id, price) => {
      dispatch({
        type: "REMOVE_ORDER",
        id: id,
        price,
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
