import {React, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './ProductsSlice';
import { ProductCardsRendered } from '../../components/ProductCardsRendered/ProductCardsRendered';
import {
  ShopNowTitleWrapper,
  ShopNowTitle,
  ProductsWrapper
} from './Products.styles';


export const Products = () => {
  const products = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

  return (
    <>
      <ShopNowTitleWrapper>
        <ShopNowTitle>Shop now!</ShopNowTitle>
      </ShopNowTitleWrapper>

      <ProductsWrapper>
        {
          products.items
          ?
          <ProductCardsRendered arrayOfProducts={products.items}/>
          :
          <></>
        }
      </ProductsWrapper>
    </>
  )
}
