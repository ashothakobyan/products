import styles from "./Product.module.css";

export const Product = ({
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  total,
  addOrder,
  index,
  removeButtonState,
  addButtonState,
  removeOrder,
}) => {
  const addOrderHandler = () => {
    addOrder(id, index, price);
  };
  const removeOrderHandler = () => {
    removeOrder(id, price);
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price.toFixed(2)}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button
          disabled={!addButtonState}
          onClick={addOrderHandler}
          className={styles.actionButton}
        >
          +
        </button>
        <button
          onClick={removeOrderHandler}
          disabled={!removeButtonState}
          className={styles.actionButton}
        >
          -
        </button>
      </td>
    </tr>
  );
};

export default Product;
