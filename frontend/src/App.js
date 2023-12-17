import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import Cart from "./pages/Cart";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/single-product/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </>
  );
}

export default App;
