import { useReducer } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {

const deafultCart={
  items:[],
  totalAmount:0
};

const cartReducer=(state,action)=>{
  return deafultCart;
};

  const [cartState,dispatchCart]=useReducer(cartReducer,deafultCart);

  const addItemHandler = (item) => {};
  const removeItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totslAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
