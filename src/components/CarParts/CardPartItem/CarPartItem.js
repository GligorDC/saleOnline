import classes from "./CarPartItem.module.css";
import CarPartForm from "./CarPartForm";
const CarPartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.carpart}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CarPartForm />
      </div>
    </li>
  );
};
export default CarPartItem;
