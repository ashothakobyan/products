import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../slicer/Context";
import OrderedProduct from "../orderedProduct/OrderedProduct";

import styles from "./OrderedProductsWrapper.module.css";

export const OrderedProductsWrapper = () => {
  const [discount, setDiscount] = useState(0);
  const { orderedProducts, totalPrice } = useContext(ProductsContext);

  useEffect(() => {
    if (totalPrice >= 1000) {
      const discount = (totalPrice / 10).toFixed(2);
      setDiscount(discount);
    } else {
      setDiscount(0);
    }
  }, [totalPrice]);

  return (
    <div className={styles.wrapper}>
      {orderedProducts.map((el) => (
        <OrderedProduct
          key={el.id}
          name={el.name}
          price={el.price}
          quantity={el.quantity}
        />
      ))}
      {totalPrice >= 1000 ? <p>{`Discount:10% | ${discount} $ `}</p> : null}

      <p>Total:{(totalPrice - discount).toFixed(2) || 0} $ </p>
    </div>
  );
};

export default OrderedProductsWrapper;
