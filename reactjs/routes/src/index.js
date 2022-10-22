import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Home from './Home';
import Menu from './Menu';
import MyMenu from './MyMenu';

import BookList  from './BookList';
import Book  from './Book';
import NewBook  from './NewBook';

import PageNotFound from './PageNotFound';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function RouteDemo()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} >
          <Route path='/' element={<Home />} ></Route>
          <Route path='aboutus'   element={<AboutUs />} ></Route>
          <Route path='contactus/:mobile/:email'  element={<ContactUs />} ></Route>
          <Route path='contactus/:mobile/:email'  element={<ContactUs />} ></Route>
          <Route path='blog' element={<Blog />}  ></Route>
          <Route path='*' element={<PageNotFound />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
function RouteWithPriority()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyMenu />} >
            <Route path='/' element={<Home />} ></Route>
            <Route path='/book' element={<BookList />} ></Route>
            <Route path='/book/:id' element={<Book />} ></Route>
            <Route path='/book/new' element={<NewBook />} ></Route>
            <Route path='*' element={<PageNotFound />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteWithPriority />);

