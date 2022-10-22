import { Outlet,Link } from "react-router-dom";

function MyMenu()
{
    return(
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/book' className='nav-link'>Books</Link>
                </li>
                <li className="nav-item">
                    <Link to='book/1' className='nav-link'>Single Book</Link>
                </li>
                <li className="nav-item">
                    <Link to='book/new' className='nav-link'>Add new book</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default MyMenu;