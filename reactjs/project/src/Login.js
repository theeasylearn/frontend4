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
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Login</h1>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}

export default Login;