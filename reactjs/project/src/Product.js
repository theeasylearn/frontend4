import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Product extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
            <PageHeading title='Product' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Product</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Product;