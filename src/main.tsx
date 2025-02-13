import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store/store.ts';
import './index.css';
import App from './App.tsx';
import { ProductList } from './components/ProductList.tsx';
import { ProductCard } from './components/ProductCard.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404</div>,
  },
  {
    path: '/products',
    element: <ProductList />,
  },
  {
    path: '/products/:id',
    element: <ProductCard />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
