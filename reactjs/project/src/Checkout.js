import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Checkout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <PageHeading title='Checkout' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <form className="py-4" method="get" action="shop-checkout2.html">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" for="firstname">Firstname</label>
                                        <input className="form-control" id="firstname" type="text" name="firstname" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" for="lastname">Lastname</label>
                                        <input className="form-control" id="lastname" type="text" name="lastname" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" for="company">Company</label>
                                        <input className="form-control" id="company" type="text" name="company" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" for="street">Street</label>
                                        <input className="form-control" id="street" type="text" name="street" />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3 col-lg-3">
                                        <label className="form-label" for="region">Region</label>
                                        <input className="form-control" id="region" type="text" name="region" />
                                    </div>
                                    <div className="col-md-6 mb-3 col-lg-3">
                                        <label className="form-label" for="states">State</label>
                                        <input className="form-control" id="states" type="text" name="states" />
                                    </div>
                                    <div className="col-md-6 mb-3 col-lg-3">
                                        <label className="form-label" for="zip">ZIP</label>
                                        <input className="form-control" id="zip" type="text" name="zip" />
                                    </div>
                                    <div className="col-md-6 mb-3 col-lg-3">
                                        <label className="form-label" for="country">Cooutry</label>
                                        <input className="form-control" id="country" type="text" name="country" />
                                    </div>

                                </div>
                                <div className="align-items-center bg-light px-4 py-3 text-center mb-5">
                                    <div className="row">
                                        <div className="col-md-6"></div>
                                        <div className="col-md-6 text-md-end py-1">
                                            <button className="btn btn-primary my-1" type="submit">Place Order <i className="fas fa-angle-right ms-1"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;