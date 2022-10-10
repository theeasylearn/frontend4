import React, { Component } from 'react';
class UnControlledAccessForm extends Component
{
    constructor(props)
    {
        super(props);
        this.height = React.createRef();
        this.base = React.createRef();
        this.state = {
            area : ''
        }
    }
    onFormSubmit = (event) =>{
        console.log("form submit");
        console.log("height = " + this.height.current.value);
        console.log("base = " + this.base.current.value);
        var result = parseInt(this.height.current.value) * parseInt(this.base.current.value);
        this.setState({
            area : result
        })
        event.preventDefault();
    }
    render()
    {
        return(
            <div className='container'>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <h3>UnControlled Approach </h3> 
                                <h5>Triangle Area Calculator</h5>
                                <hr/>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={this.onFormSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="height" placeholder="Height" required ref={this.height}  />
                                        <label htmlFor="height">Height</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="base" placeholder="Base" required ref={this.base}  />
                                        <label htmlFor="base">Base</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Calculate Triangle Area</button>
                                    <div className='mt-3'><h4>{this.state.area}</h4></div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default UnControlledAccessForm;