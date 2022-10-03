import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [validAmount,setValid]=useState(true);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enterAmount = amountRef.current.value;
    const enterAmountNumber = +enterAmount;

    if (
      enterAmount.trim() === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ){
      setValid(false);
      return;
    }
      
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ADD</button>
      {!validAmount && <p>Please Enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
