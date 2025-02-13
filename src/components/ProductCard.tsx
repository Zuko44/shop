import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../services/apiSlice';
import styles from '../App.module.scss';

const AVAILABLE_COLORS = ['#000', '#ff69b4', '#ff0'];
const AVAILABLE_SIZES = ['S', 'M', 'L', 'XL'];

export const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0]);
  const [selectedSize, setSelectedSize] = useState(AVAILABLE_SIZES[0]);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : null;

  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(productId!, { skip: !productId });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product.</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h2 className={styles.name}>{product.title}</h2>
      <div className={styles.price}>
        <span className={styles.currentPrice}>${product.price.toFixed(2)}</span>
      </div>
      <div className={styles.rating}>
        ⭐ {product.rating.rate} ({product.rating.count} reviews)
      </div>

      <div className={styles.colorSelector}>
        <span>Color:</span>
        <div className={styles.colorOptions}>
          {AVAILABLE_COLORS.map((color) => (
            <button
              key={color}
              className={`${styles.colorButton} ${selectedColor === color ? styles.active : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>

      <div className={styles.sizeSelector}>
        <span>Size:</span>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {AVAILABLE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.quantitySelector}>
        <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)}>+</button>
      </div>

      <button className={styles.addToCart}>Add to Cart</button>
    </div>
  );
};
