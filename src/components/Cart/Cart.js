import classes from "./Cart.module.css";
import Modal from "../UI element/Modal";

const Cart = (props) => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCartHandler={props.onHideCartHandler}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCartHandler}>Close</button>
        <button className={classes.button}> Order</button>
      </div>
    </Modal>
  );
};

export default Cart;