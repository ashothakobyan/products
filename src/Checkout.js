import React, { useContext, useEffect } from "react";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { getProducts } from "./dataService";
import Product from "./components/product/Product";

import { ProductsContext } from "./slicer/Context";
import OrderedProductsWrapper from "./components/orderedProducts/orderProductsWrapper/OrderedProductsWrapper";

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Checkout = () => {
  const {
    showLoadingState,
    changeLoadingState,
    setProducts,
    products,
    addOrder,
    removeOrder,
  } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      changeLoadingState(false);
    });
  }, []);

  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {showLoadingState ? <LoadingIcon /> : null}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length
              ? products.map((product, index) => (
                  <Product
                    key={product.id}
                    index={index}
                    id={product.id}
                    name={product.name}
                    availableCount={product.availableCount}
                    price={product.price}
                    orderedQuantity={product.orderedQuantity}
                    total={product.total}
                    removeButtonState={product.removeButtonState}
                    addButtonState={product.addButtonState}
                    addOrder={addOrder}
                    removeOrder={removeOrder}
                  />
                ))
              : null}
          </tbody>
        </table>
        <h2>Order summary</h2>

        <OrderedProductsWrapper />
      </main>
    </div>
  );
};

export default Checkout;
