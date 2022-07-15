import react from "react";
import styles from "./Product.module.css";

export const Product = ({
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  total,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button className={styles.actionButton}>+</button>
        <button className={styles.actionButton}>-</button>
      </td>
    </tr>
  );
};

export default Product;
