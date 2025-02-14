import styles from '../styles/ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { getProductUrlById } from '../utils/urls';
import { ProductCardProps } from '../types';

export const ProductTicket: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return <p>Product data is missing</p>;
  }

  return (
    <div key={product.id} className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.name}>{product.title}</h2>
      <div className={styles.price}>
        <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
      </div>
      <div>
        <Link to={getProductUrlById(product.id)}>View Details</Link>
      </div>
    </div>
  );
};
