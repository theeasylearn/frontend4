import React, { Component } from 'react';
import PageHeading from './PageHeading';
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div>
            <PageHeading title='Cart' />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Cart</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Cart;