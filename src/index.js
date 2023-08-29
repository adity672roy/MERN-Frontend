import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  cartReducer,
  orderReducer,
  productReducer,
  userReducer,
} from "./reducers/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CartPage from "./pages/cartPage";
import CheckoutPage from "./pages/checkoutPage";
import OrdersPage from "./pages/ordersPage";
import ProductDetailPage from "./pages/productDetailPage";
import LoginSignupPage from "./pages/loginSignupPage";
import OrderSuccessPage from "./pages/orderSuccessPage";
import NoPage from "./pages/404";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    user: userReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="myorders" element={<OrdersPage />} />
          <Route path="login" element={<LoginSignupPage />} />
          <Route path="order-success/:orderid" element={<OrderSuccessPage />} />
          <Route path="product/:productId" element={<ProductDetailPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
