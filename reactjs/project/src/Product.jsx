import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    Item(props) {
        return (
            <div className="col-lg-3">
                <div className="product h-100">
                    <div className="product-image">
                        <a href="productdetail">
                            <img className="img-fluid" src={props.photo} alt="" />
                        </a>
                    </div>
                    <div className="py-4 px-3 text-center">
                        <h3 className="h5 text-uppercase mb-3">
                            <a className="reset-link" href="productdetail">{props.title}</a></h3>
                        <p className="mb-0">{props.price} Rs</p>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div>
                <PageHeading title='Product' />
                <div className='container'>
                    <div className="row g-5 pt-3">
                        <this.Item title='T-shirt' price='1000' photo='/img/product1.jpg' />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;