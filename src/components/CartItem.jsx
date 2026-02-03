import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./CartSlice";
import Header from "./Header";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  // Calculate total cart amount
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <h2>Your cart is empty.</h2>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
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
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.price * item.quantity}</p>
            <div className="cart-controls">
              <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Cart Total: ${totalAmount}</h3>
      <div className="cart-actions">
        <button onClick={() => alert("Coming Soon")}>Checkout</button>
        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
};

export default CartItem;
