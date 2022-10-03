import React, { Component } from 'react';
class EventHandlingTechnique2 extends Component {    
    constructor(props) {
        super(props);
        this.state = { 
            isLike: 0,
            label : 'Like'
         }
        this.changeLabel = this.changeLabel.bind(this);
    }
    changeLabel(){
        console.log('changeLabel method is called...');
        this.setState(previousState =>(
            {
                isLike : !previousState.isLike,
            }
        ));
        if(this.state.isLike==0)
        {
            this.setState({
                label : 'Liked'
            });
        }
        else 
        {
            this.setState({
                label : 'Like'
            });
        }
    }
    ShareDetail(id,name)
    {
        console.log(id,name);
    }
    render() 
    { 
        return (
            <div className='col-4'>
                <div className='card'>
                    <div className='card-header'>
                        <h5>Facebook post</h5>
                    </div>
                    <div className='card-body'>
                        <img alt='image not found' src='https://picsum.photos/300' className='img-fluid' />
                    </div>
                    <div className='card-footer'>
                        <button onClick={this.changeLabel} type='button' className='btn btn-primary'>{this.state.label}</button>&nbsp;
                        <button onClick={()=>this.ShareDetail(1,'Ankit')}type='button' className='btn btn-info'>Share</button>
                    </div>
                </div>
            </div>
         );
    }
}
export default EventHandlingTechnique2;