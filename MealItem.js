import { useContext } from "react";
import CartContext from "../../../Context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem=(props)=>{

const cxt= useContext(CartContext);

const addCartHandler=(amount)=>{
    cxt.addItem()
};

    return(
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
            </div>
            <div>
                <MealItemForm onAddCart={addCartHandler} id={props.id}/>
            </div>
        </li>
    );
}

export default MealItem;