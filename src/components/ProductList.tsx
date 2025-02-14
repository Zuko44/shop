import React from 'react';
import { useGetProductsQuery } from '../services/apiSlice';
import stylesList from '../styles/ProductList.module.scss';
import { ProductTicket } from './ProductTicket';

export const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;
  if (products?.length === 0) return <p>No products found.</p>;

  return (
    <div className={stylesList.mainProducts}>
      {products?.map((product) => (
        <ProductTicket key={product.id} product={product} />
      ))}
    </div>
  );
};
