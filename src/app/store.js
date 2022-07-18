import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/Login/LoginSlice';
import cartReducer from '../pages/Cart/CartSlice';
import productsReducer from '../pages/Products/ProductsSlice';
import checkoutReducer from '../pages/Cart/CheckoutSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
    products: productsReducer,
    checkout: checkoutReducer,
  }
})