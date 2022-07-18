import React from 'react';
import { ProductCard } from './ProductCard/ProductCard';


export const ProductCardsRendered = ({arrayOfProducts}) => {
  const arrayOfProductCards = arrayOfProducts.map((product) => {

    return(
      <ProductCard
        key={product.id}
        item={product}
      />
    )
  })
  return arrayOfProductCards;
}