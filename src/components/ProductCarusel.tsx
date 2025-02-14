import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '../App.module.scss';
import { fetchProducts } from '../hooks/fetchProducts';

export const ProductCarousel = () => {
  const { products, loading, error } = fetchProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (products.length === 0) return <p>No products found.</p>;

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
