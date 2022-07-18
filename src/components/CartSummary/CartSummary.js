import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkoutProducts } from '../../pages/Cart/CheckoutSlice';
import { CartSummaryWrapper,
  SummaryTitle,
  Text,
  TotalCostNumber,
  HorizontalLine,
  CheckoutButtonWrapper,
  CheckoutButton,
} from './CartSummary.styles';


export const CartSummary = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const arrayOfItemsOnCart = useSelector((state) => state.cart.itemsOnCart)
  const totalItems = arrayOfItemsOnCart.reduce(
    (total, item) => (total += item.quantity),
    0
  );
  const totalCost = arrayOfItemsOnCart.reduce(
    (total, element) => (total += element.item.price * element.quantity),
    0
  );
	const checkoutPurchase = () => {
		dispatch(checkoutProducts()).then((result) => {
			if (result.meta.requestStatus === "fulfilled") {
				history.push("checkout");
			}
		});
	};

  return(
  <CartSummaryWrapper>

    <SummaryTitle>Summary</SummaryTitle>
    <HorizontalLine />

    <Text>Items: {totalItems}</Text>
    <HorizontalLine />

    <Text>Total Cost:</Text>
    <TotalCostNumber>$ {totalCost.toFixed(1)}</TotalCostNumber>

    <CheckoutButtonWrapper>
      <CheckoutButton onClick={checkoutPurchase}>Checkout</CheckoutButton>
    </CheckoutButtonWrapper>

  </CartSummaryWrapper>
  )
};
