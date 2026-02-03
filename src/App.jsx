import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import AboutPage from "./components/AboutPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="content-bg">
        <Routes>
          <Route
            path="/"
            element={
              <div className="landing">
                <h1>🌿 Paradise Nursery</h1>
                <AboutUs />
                <Link to="/plants">
                  <button>Get Started</button>
                </Link>
              </div>
            }
          />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
