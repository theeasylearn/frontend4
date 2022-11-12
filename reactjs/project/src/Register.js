import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
            <PageHeading title='Register' />
            <div className='container'>
                <div className='row my-5'>
                <div className='col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3'>
                            <div className='card shadow'>
                                <div className='card-body'>
                                    <header className="mb-5">
                                        <h2 className="text-uppercase text-center mb-4">Register</h2>
                                        <p className="lead text-center">Not our registered customer yet?</p>
                                    </header>

                                    <hr className="border-gray-200" />
                                    <form action="customer-orders.html">
                                        <div className="form-group mb-3">
                                            <label className="form-label" for="loginemail"></label>
                                            <input className="form-control" id="loginemail" type="text" name="loginemail" placeholder="Enter your email address" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label" for="password"></label>
                                            <input className="form-control" id="password" type="text" name="password" placeholder="Enter your password" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label" for="confirmpassword"></label>
                                            <input className="form-control" id="confirmpassword" type="text" name="confirmpassword" placeholder="Enter your confirm password" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="form-label" for="mobile"></label>
                                            <input className="form-control" id="mobile" type="number" name="mobile" placeholder="Enter your mobile no" />
                                        </div>
                                        <div className="form-group mb-3 text-center">
                                            <button className="btn btn-outline-primary" type="submit"><i className="fas fa-door-open me-2"></i>Sign in</button>
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

export default Register;