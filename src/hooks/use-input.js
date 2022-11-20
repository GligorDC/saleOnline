import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    
    const valueIsValid = validateValue ? validateValue(enteredValue): true;
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}
export default useInput;

//https://academind.com/tutorials/reactjs-a-custom-useform-hook

// same HOOk with  useReducer
// const useInput = (validateValue) => {
//   const [inputState, dispatch] = useReducer(
//     inputStateReducer,
//     initialInputState
//   );

//   const valueIsValid = validateValue(inputState.value);
//   const hasError = !valueIsValid && inputState.isTouched;

//   const valueChangeHandler = (event) => {
//     dispatch({ type: 'INPUT', value: event.target.value });
//   };

//   const inputBlurHandler = (event) => {
//     dispatch({ type: 'BLUR' });
//   };

//   const reset = () => {
//     dispatch({ type: 'RESET' });
//   };

//   return {
//     value: inputState.value,
//     isValid: valueIsValid,
//     hasError,
//     valueChangeHandler,
//     inputBlurHandler,
//     reset,
//   };
// };

// export default useInput;