import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Category from './Category';
import Cart from './Cart';
import Checkout from './Checkout';
import Login from './Login';
import Register from './Register';
import Product from './Product';
import SingleProduct from './SingleProduct';
import MyCommonParts from './MyCommonParts';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRoutes()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyCommonParts />} >
            <Route path='/category' element={<Category />} ></Route>
            <Route path='/cart' element={<Cart />} ></Route>
            <Route path='/checkout' element={<Checkout />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/products' element={<Product />} ></Route>
            <Route path='/productdetail' element={<SingleProduct />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
root.render(<MyRoutes />);

