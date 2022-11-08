import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Category from './Category';
import MyCommonParts from './MyCommonParts';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRoutes()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyCommonParts />} >
            <Route path='/category' element={<Category />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
root.render(<MyRoutes />);

