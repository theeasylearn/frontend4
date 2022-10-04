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
            IsLoggedIn : true,
            UserName : 'Ankit Patel'
        });
    }
    Logout = () =>
    {
        this.setState({
            IsLoggedIn : false
        });
    }
    UserGreeting()
    {
        return <h1>Welcome {this.state.UserName}</h1>
    }
    GuestGreeting()
    {
        return <h1>Welcome Guest</h1>
    }
    GreetingMessage()
    {
        let message;
        if (this.state.IsLoggedIn==true)
        {
            message = this.UserGreeting();
        }
        else 
        {
            message = this.GuestGreeting();
        }
        return message
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
                {this.GreetingMessage()}
                {button}
            </div>
         );
    }  
}
export default ConditionalRendering;