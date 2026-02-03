import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";
import Header from "./Header";

const plants = [
  { id: 1, name: "Monstera", price: 25, category: "Tropical", img: "https://media.istockphoto.com/id/1254913138/photo/giant-monstera-tree-in-flowerpot-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=WgSHacraFVz5ez-XLpnO9Jc4Jh6uf-v_LH6uSqqFwiI=" },
  { id: 2, name: "Fiddle Leaf Fig", price: 30, category: "Tropical", img: "https://media.istockphoto.com/id/1407523996/photo/fiddle-leaf-fig-ficus-lyrata-plant-in-circle-white-pot-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=m-jo4TbclAQ5p3I9JTq-BUnAQJI5IZMrqwo3majwgno=" },
  { id: 3, name: "Snake Plant", price: 20, category: "Succulent", img: "https://media.istockphoto.com/id/951908336/photo/house-plant-sansevieria-trifasciata.jpg?s=612x612&w=0&k=20&c=X3fjQ6b1Ih2j1mgkDwYD9tr_Js1Q_Oy8iKYOqsSMpfU=" },
  { id: 4, name: "Aloe Vera", price: 18, category: "Succulent", img: "https://www.ikea.com/ca/en/images/products/aloe-vera-potted-plant-aloe__1368841_pe957973_s5.jpg?f=s" },
  { id: 5, name: "Peace Lily", price: 22, category: "Flowering", img: "https://media.istockphoto.com/id/1176087152/photo/potted-spathiphyllum-plant-with-white-flowers.jpg?s=612x612&w=0&k=20&c=lrsW2NHV5RWv-ANSApV4qxsFg1EDBGzGaekP4cszArw=" },
  { id: 6, name: "Orchid", price: 28, category: "Flowering", img: "https://media.istockphoto.com/id/124012014/photo/little-purple-orchid-in-white-flower-bowl.jpg?s=612x612&w=0&k=20&c=80oTukZnNXCXSNmxWfq17nOMAz9dMU9gNQqGgUpkw0g=" }
];

const groupByCategory = (plants) => {
  return plants.reduce((groups, plant) => {
    if (!groups[plant.category]) groups[plant.category] = [];
    groups[plant.category].push(plant);
    return groups;
  }, {});
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const plantsByCategory = groupByCategory(plants);

  return (
    <>
      <Header />
      <h2>Our Plants</h2>
      {Object.entries(plantsByCategory).map(([category, plants]) => (
        <div key={category}>
          <h3>{category}</h3>
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
        </div>
      ))}
    </>
  );
};

export default ProductList;
