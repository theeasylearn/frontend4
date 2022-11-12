import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <PageHeading title='Login' />
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3'>
                            <div className='card shadow'>
                                <div className='card-body'>
                                    <header className="mb-5">
                                        <h2 className="text-uppercase text-center mb-4">Login</h2>
                                        <p className="lead text-center">Already our customer?</p>
                                    </header>

                                    <hr className="border-gray-200" />
                                    <form action="customer-orders.html">
                                        <div className="form-group mb-3">
                                            <label className="form-label" for="loginemail"></label>
                                            <input className="form-control" id="loginemail" type="text" name="loginemail" placeholder="Enter your email address" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label" for="loginpassword"></label>
                                            <input className="form-control" id="loginpassword" type="text" name="loginpassword" placeholder="Enter your password" />
                                        </div>
                                        <div className="form-group mb-3 text-center">
                                            <button className="btn btn-outline-primary" type="submit"><i className="fas fa-door-open me-2"></i>Log in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;