import { Outlet, Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <header className="nav-holder make-sticky">
            <div className="navbar navbar-light bg-white navbar-expand-lg py-0" id="navbar">
            <div className="container py-3 py-lg-0 px-lg-0">
                <a className="navbar-brand" href="index.html">
                <img className="d-none d-md-inline-block" src="img/logo.png" alt="Universal logo" /><img className="d-inline-block d-md-none" src="img/logo-small.png" alt="Universal logo" /><span className="sr-only">Universal - go to homepage</span></a>
                <button className="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="sr-only">Toggle navigation</span><i className="fas fa-align-justify"></i></button>
                <div className="collapse navbar-collapse" id="navigationCollapse">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/category">Shop</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="cart">Cart</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="checkout">Checkout</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="login">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="register">Register</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
      </header>
            <Outlet />
      <footer>
        <div className="bg-dark py-5">
          <div className="container">
            <div className="row align-items-cenrer gy-3 text-center">
              <div className="col-md-6 text-md-start">
                <p className="mb-0 text-sm text-gray-500">&copy; 2022. The easylearn academy </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}
export default Menu