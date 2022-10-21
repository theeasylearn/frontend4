import { Outlet, Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <div className="container-fluid bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Blog">Home</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus/9662512857/support@theeasylearn.com">Contact support Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus/9368521471/sales@theeasylearn.com">Contact Sales Team</Link>
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