import React, { Component } from 'react';
import PageHeading from './PageHeading';
class SingleProduct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <PageHeading title='Product Detail' />
                <div className='container'>
                    <div className='row my-5'>
                        <div className="col-lg-6">
                            <img className="img-fluid" src="/img/detailbig1.jpg" alt="..." />
                        </div>
                        <div className="col-lg-6 d-flex flex-column">
                            <div className="p-4 p-lg-5 border mb-5 bg-light">
                                <form action="#">
                                   
                                    <p className="h1 text-muted mb-4 text-center fw-normal">1500</p>
                                    <p className="text-center">
                                        <button className="btn btn-outline-primary" type="submit"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                                       
                                    </p>
                                </form>
                            </div>
                            <h4>Product details</h4>
                            <p>detail goes here</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleProduct;