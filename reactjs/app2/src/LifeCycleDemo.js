import React, { Component } from 'react';
class MyLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            CurrentTime : new Date().toLocaleTimeString()
         }
    }

    componentWillMount()
    {
        console.log('componentWillMount method called....');
    }
    componentDidMount()
    {
        console.log('componentDidMount method called....');
    }
    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate method called....');
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate method called....');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate method called....');
    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount method called....');
    }
    UpdateCurrentTime = () =>{
       this.setState({
            CurrentTime : new Date().toLocaleTimeString()
       });
    }
    render() { 
        console.log('render method called....');
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>LifeCycle Demo</h1> <hr/>
                        <button onClick={this.UpdateCurrentTime} className='btn btn-danger'>Update time</button>
                        <h2>{this.state.CurrentTime}</h2>
                    </div>
                </div>
            </div>
         );
    }

}
 
export default MyLifeCycle;