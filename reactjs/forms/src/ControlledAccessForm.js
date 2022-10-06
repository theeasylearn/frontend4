import React from 'react';
class ControlledAccessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume : '',
         }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onChangeInput(event)
    {
        console.log(event.target.name + " " + event.target.value);
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onFormSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
        console.log("form submited");
        var height = parseInt(this.state.height); 
        var width = parseInt(this.state.width); 
        var length = parseInt(this.state.length);
        this.setState(
        {
            volume : height * width * length
        }
        )
    }
    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Controlled Access Form Example - (1st approach)</h1> <hr/>
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <h3>Volume Calculator</h3>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="height" placeholder="Height" required 
                                        onChange={this.onChangeInput} value={this.state.height} />
                                        <label htmlFor="height">Height</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="width" placeholder="Width" required 
                                        onChange={this.onChangeInput} value={this.state.width} />
                                        <label htmlFor="width">Width</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="length" placeholder="Length" required 
                                        onChange={this.onChangeInput} value={this.state.length} />
                                        <label htmlFor="length">Length</label>
                                    </div>
                                    <button onClick={this.onFormSubmit} type="submit" className="btn btn-primary">Calculate Volume</button>
                                    <div className='mt-3'><h4>{this.state.volume}</h4></div>
                                </form>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            );
    }
}
 
export default ControlledAccessForm;