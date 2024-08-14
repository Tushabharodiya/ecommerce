import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./redux/atoms/Atoms";
import Login from "./redux/component/Login";
import Register from "./redux/component/Register";
import Home from "./redux/user/pages/Home";
import About from "./redux/user/pages/About";
import Shop from "./redux/user/pages/Shop";
import Contact from "./redux/user/pages/Contact";
import Blog from "./redux/user/pages/Blog";
import Dashborad from "./redux/admin/pages/Dashborad";
import Manage from "./redux/admin/pages/Manage";
import ForgerPassword from "./redux/component/ForgerPassword";
import Product from "./redux/admin/pages/Product";
import Order from "./redux/admin/pages/Order";
import Category from "./redux/admin/pages/Category";
import Userlist from "./redux/admin/pages/Userlist";
import { Adminprivate, Userprivate } from "./redux/private/Privatte";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_CART_PENDING, GET_CATEGORY_PENDING, GET_PRODUCT_PENDING, GET_WISHLIST_PENDING } from "./redux/admin/action";
import Footer from "./redux/component/Footer";
import Cart from "./redux/user/pages/Cart";
import ProductDetails from "./redux/user/pages/ProductDetails";
import Wishlist from "./redux/user/pages/Wishlist";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== "/register" && location.pathname !== "/forgetpassword";

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_CATEGORY_PENDING })
    dispatch({ type: GET_PRODUCT_PENDING })
    dispatch({ type: GET_CART_PENDING })
    dispatch({ type: GET_WISHLIST_PENDING })
  }, [])
  return (

    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgerPassword />} />
        <Route element={< Userprivate />} >
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/:id" element={<ProductDetails />} />
        </Route>
        <Route element={< Adminprivate />} >
          <Route path="/dashboard" element={<Dashborad />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/category" element={<Category />} />
          <Route path="/userlist" element={<Userlist />} />
        </Route>
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}




export default App;
