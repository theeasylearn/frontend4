import { Outlet, Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <div className="container-fluid bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="aboutus" className="nav-link">About us</a>
                    </li>
                    <li className="nav-item">
                        <a href="blog" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="contactus/9662512857/ankit3385@gmail.com" className="nav-link">Contact Sales</a>
                    </li>
                    <li className="nav-item">
                        <a href="contactus/1231231230/support@gmail.com" className="nav-link">Contact Support</a>
                    </li>
                </ul>
                <hr/>
            </div>
            <Outlet />
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-12">
                        <p>this is footer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu