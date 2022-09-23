import React, { Component } from 'react';
class Subject extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : this.props.name,
            duration : this.props.duration
          }
    }
    render() { 
        return ( 
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                <div className='card shadow'>
                    <div className='card-header'>
                        <h5>Subject {this.state.name}</h5>
                    </div>
                    <div className='card-body'>
                        Duration {this.state.duration}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Subject;