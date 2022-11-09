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
                <div className='row'>
                    <div className='col-12'>
                        <h1>Product Detail</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default SingleProduct;