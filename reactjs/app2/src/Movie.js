import React, { Component } from 'react';
class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name : this.props.name,
            photo : this.props.photo,
            year : this.props.year,
            likecount : 0,
            dislikecount : 0
         }
    }
    UpdateLike = () => {
        this.setState({
            likecount: this.state.likecount + 1
        });
    }
    UpdateDislike = () =>{
        this.setState({
            dislikecount : this.state.dislikecount + 1
        });
    }
    render() { 
        return ( 
            <div className='col-lg-4 mt-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Movie Name :- {this.state.name}</h3>
                        <h5>Release Year :- {this.state.year}</h5>
                    </div>
                    <div className='card-body'>
                        <img src={this.state.photo} className='img-fluid' />       
                    </div>
                    <div className='card-footer'>
                        <button onClick={this.UpdateLike} className='btn btn-primary'>Like {this.state.likecount}</button> &nbsp;
                        <button onClick={this.UpdateDislike} className='btn btn-danger'>DisLike {this.state.dislikecount}</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Movie;