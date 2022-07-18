import React from 'react';
import { useSelector } from 'react-redux';
import { TableWrapper } from './CartTable.styles'
import { CartTableRow } from '../CartTableRow/CartTableRow';

export const CartTable = () => {
  const arrayOfProducts = useSelector((state) => state.cart.itemsOnCart)

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Product details</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {arrayOfProducts.map((product) => {
          return (
            <CartTableRow
              key={product.item.id}
              item={product.item}
            />
          );
        })}
      </tbody>

    </TableWrapper>
  );
};