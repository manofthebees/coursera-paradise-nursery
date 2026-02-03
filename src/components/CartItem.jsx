import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./CartSlice";
import Header from "./Header";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <h2>Your cart is empty.</h2>
      </>
    );
  }

  return (
    <>
      <Header />
      <h2>Your Cart</h2>
      <div className="cart-grid">
        {cart.map(item => (
          <div key={item.id} className="cart-card">
            <img src={item.img} alt={item.name} />
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <p>{item.quantity} in cart</p>
            <div className="cart-controls">
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartItem;
