import { LayoutProps } from '../types';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from '../App.module.scss';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <main className={styles.mainContent}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
