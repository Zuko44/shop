import React from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../services/apiSlice';
import styles from '../App.module.scss';

export const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  return (
    <div className={styles.mainProducts}>
      {products?.map((product) => (
        <div key={product.id} className={styles.card}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
          <h2 className={styles.name}>{product.title}</h2>
          <div className={styles.price}>
            <span className={styles.currentPrice}>
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
