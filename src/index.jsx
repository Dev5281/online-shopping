import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Success from './pages/Success';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ProductContextProvider } from './context/ProductContext';

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/:category?',
      element:<Product/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/success',
      element:<Success/>
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
    <RouterProvider router={router}/>
    </ProductContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
