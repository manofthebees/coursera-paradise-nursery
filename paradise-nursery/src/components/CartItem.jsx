import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./CartSlice";
import Header from "./Header";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Header />
      <h2>Shopping Cart</h2>

      <p>Total Plants: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
        </div>
      ))}

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </>
  );
};

export default CartItem;
