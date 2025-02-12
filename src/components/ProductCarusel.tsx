import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import axios from 'axios';
import { Product } from '../types';
import styles from '../App.module.scss';

export const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://api.example.com/products'
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className={styles.productCard}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
