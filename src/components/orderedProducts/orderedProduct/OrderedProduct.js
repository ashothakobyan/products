import styles from "./OrderedProduct.module.css";

export const OrderedProduct = ({ id, quantity, name, price }) => {
  return (
    <div className={styles.wrapper}>
      <h5> Quantity:{quantity} |</h5>
      <h5> {name} |</h5>
      <h5>{`${quantity} * ${price.toFixed(2)}$ |`}</h5>
      <h5> {`${(quantity * price).toFixed(2)} $ |`}</h5>
    </div>
  );
};

export default OrderedProduct;
