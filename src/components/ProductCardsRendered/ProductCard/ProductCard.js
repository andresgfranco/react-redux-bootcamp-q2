import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../pages/Cart/CartSlice';
import {
  CardWrapper,
  ProductImageWrapper,
  ProductImage,
  ProductName,
  ProductCategory,
  ProductPrice,
  AddToCartButton,
  AddToCartButtonWrapper
} from './ProductCard.styles';

export const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  const name = item.name.length > 45 ? item.name.slice(0, 45) + '...' : item.name; // To keep the product name max in 2 rows when rendering in ProductCard.

  return (
  <CardWrapper>

    <ProductImageWrapper>
      <ProductImage src={item.images[0]} alt={'Picture of a ' + name} />
    </ProductImageWrapper>

    <ProductName>{name}</ProductName>
    <ProductCategory>{item.categories[0]}</ProductCategory>
    <ProductPrice>$ {item.price}</ProductPrice>

    <AddToCartButtonWrapper>
      <AddToCartButton onClick={() =>  dispatch(addItemToCart({item}))}>
        Add to  Cart
      </AddToCartButton>
    </AddToCartButtonWrapper>

  </CardWrapper>
  )
};