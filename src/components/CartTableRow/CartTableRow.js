import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalQuantityOnCart, removeItemFromCart } from '../../pages/Cart/CartSlice';
import {
  TableData,
  ProductDetailsWrapper,
  ProductImageWrapper,
  Image,
  ProductDetailsTextWrapper,
  QuantityWrapper,
  RemoveButton,
  TotalPriceData,
} from './CartTableRow.styles';

export const CartTableRow = ({item}) => {
  const dispatch = useDispatch();
  const {name, price, images, id} = item;
  const quantity = useSelector((state) => {
    if (state.cart.itemsOnCart.find((element) => element.item.id === id)) {
      return state.cart.itemsOnCart.find((element) => element.item.id === id).quantity
    }
  })
  const totalPrice = quantity ? (price * quantity).toFixed(1) : 0;

  return (
    <tr>
      <TableData>

        <ProductDetailsWrapper>
          <ProductImageWrapper>
            <Image src={images[0]} alt={'Picture of the product ' + name} />
          </ProductImageWrapper>
          <ProductDetailsTextWrapper>
            <p>{name}</p>
            <p>Product code: {id}</p>
          </ProductDetailsTextWrapper>
        </ProductDetailsWrapper>
      </TableData>

      <TableData>
        <QuantityWrapper>
          <input
            defaultValue={quantity}
            type='number'
            min={1}
            onChange={(e) => {
              const itemQuantity = e.target.value === '' ? 1 : parseInt(e.target.value);
              dispatch(updateTotalQuantityOnCart({idToFind: id, quantity: itemQuantity}))
            }}
          />
          <RemoveButton onClick={() => dispatch(removeItemFromCart({idToFind: id}))}>Remove</RemoveButton>
        </QuantityWrapper>
      </TableData>

      <TableData>${price}</TableData>
      <TotalPriceData>${totalPrice}</TotalPriceData>
    </tr>
  );
};