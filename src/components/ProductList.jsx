import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import Header from "./Header";

const plants = [
  { id: 1, name: "Monstera", price: 25, category: "Tropical", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Fiddle Leaf Fig", price: 30, category: "Tropical", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Snake Plant", price: 20, category: "Succulent", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Aloe Vera", price: 18, category: "Succulent", img: "https://via.placeholder.com/150" },
  { id: 5, name: "Peace Lily", price: 22, category: "Flowering", img: "https://via.placeholder.com/150" },
  { id: 6, name: "Orchid", price: 28, category: "Flowering", img: "https://via.placeholder.com/150" }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <>
      <Header />
      <h2>Our Plants</h2>
      <div className="plant-grid">
        {plants.map(plant => {
          const inCart = cart.some(item => item.id === plant.id);

          return (
            <div key={plant.id} className="plant-card">
              <img src={plant.img} alt={plant.name} />
              <h4>{plant.name}</h4>
              <p>${plant.price}</p>
              <button
                disabled={inCart}
                onClick={() => dispatch(addToCart(plant))}
              >
                {inCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
