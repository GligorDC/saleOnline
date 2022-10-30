import classes from "./CarPartForm.module.css";
import Input from "../../UI element/Input";
import { useRef, useState } from "react";

const CarPartForm = (props) => {
  const [amountIsValid, setAmaountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountValue = + enteredAmount;
    //convert a string to number
    if(enteredAmount.trim().length === 0 || enteredAmountValue < 1 || enteredAmountValue>5)
    {
        setAmaountIsValid(false);
        return ;
    }
    props.onAddToCart(enteredAmountValue);
};

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add</button>
      {!amountIsValid &&<p>
        Please enter a vald value
        </p>}
    </form>
  );
};
export default CarPartForm;
