import classes from "./CarPartItem.module.css";
import CarPartForm from "./CarPartForm";
import { useContext } from "react";
import CartContext from '../../../store/cart-context'

const CarPartItem = (props) => {
  const cartContext= useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name:props.name,
      amount: amount,
      price: props.price
    })
  };
  return (
    <li className={classes.carpart}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CarPartForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default CarPartItem;
