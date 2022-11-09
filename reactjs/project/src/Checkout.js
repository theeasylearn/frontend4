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
                        <h1>Checkout</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Checkout;