import React, { Component } from 'react';
class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            IsLoggedIn: false
         }

    }
    LoginButton()
    {
        return <button onClick={this.Login} className='btn btn-success'>Login</button>
    }
    LogoutButton()
    {
        return <button onClick={this.Logout} className='btn btn-danger'>Logout</button>
    }
    Login = () => {
        this.setState({
            IsLoggedIn : true
        });
    }
    Logout = () =>
    {
        this.setState({
            IsLoggedIn : false
        });
    }
    render() { 
        let button; //local variable
        if (this.state.IsLoggedIn==true)
        {
            button = this.LogoutButton()
        }
        else 
        {
            button = this.LoginButton()
        }
        return ( 
            <div className='col-12'>
                {button}
            </div>
         );
    }
}
 
export default ConditionalRendering;