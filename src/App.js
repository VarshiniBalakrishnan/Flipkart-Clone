import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./app/store";
import GoToTop from "./components/GoToTop/GoToTop";

const App = () => {

  return (
    <Provider store={store}>
    
  <BrowserRouter>
  <Navbar />

    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Products" element={<Products />} />
      <Route path="/ProductDetails/:id" element={<ProductDetails />} /> 
      <Route path="/cart" element={<Cart />} />
    </Routes> 
    
    <Footer />
    < GoToTop />
    </BrowserRouter>
    </Provider>
    
    
  );

};
export default App;
