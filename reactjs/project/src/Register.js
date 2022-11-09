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
                <div className='row'>
                    <div className='col-12'>
                        <h1>Register</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Register;