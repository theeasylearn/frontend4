import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Blog from './Blog';
import Home from './Home';
import Menu from './Menu';
import PageNotFound from './PageNotFound';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function RouteDemo()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element=<Menu /> >
          <Route index element=<Home /> />
          <Route path='aboutus' element=<AboutUs /> />
          <Route path='contactus/:mobile/:email' element=<ContactUs /> />
          <Route path='contactus/:mobile/:email' element=<ContactUs /> />
          <Route path='blog' element=<Blog /> />
          <Route path='*' element=<PageNotFound /> />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteDemo />);

