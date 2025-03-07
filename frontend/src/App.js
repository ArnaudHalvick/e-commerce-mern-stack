import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // TODO: => switch to createBrowserRouter ? Not necessary but good for practice
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Footer from "./components/footer/Footer";
import men_banner from "./components/assets/banner_mens.png";
import women_banner from "./components/assets/banner_women.png";
import kids_banner from "./components/assets/banner_kids.png";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory category="men" banner={men_banner} />}
        />
        <Route
          path="/women"
          element={<ShopCategory category="women" banner={women_banner} />}
        />
        <Route
          path="/kids"
          element={<ShopCategory category="kid" banner={kids_banner} />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
