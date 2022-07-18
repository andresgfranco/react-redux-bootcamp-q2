import React from 'react'
import { useSelector } from 'react-redux';
import { CartTable } from '../../components/CartTable/CartTable';
import { CartSummary } from '../../components/CartSummary/CartSummary';
import {
  ShopCartWrapper,
  ShoppingCartTitle,
  ShoppingCartTableWrapper,
  ShoppingCartHorizontalLine,
  NoItemsTitle,
} from './Cart.styles';


export const Cart = () => {
  const itemsOnCart = useSelector((state) => state.cart.itemsOnCart)

  return (
      (itemsOnCart === undefined || itemsOnCart.length === 0)
      ?
      <NoItemsTitle>There's no items in your cart :(</NoItemsTitle>
      :
      <ShopCartWrapper>

        <ShoppingCartTableWrapper>

          <ShoppingCartTitle>
            Shopping Cart
          </ShoppingCartTitle>
          <ShoppingCartHorizontalLine/>
          <CartTable/>

        </ShoppingCartTableWrapper>

        <CartSummary/>

      </ShopCartWrapper>
  )
}