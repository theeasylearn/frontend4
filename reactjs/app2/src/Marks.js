import React, { Component } from 'react';
class Marks extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            maths:parseInt(this.props.maths),
            science:parseInt(this.props.science),
            english:parseInt(this.props.english),
            total:0,
            average:0.0
         }
    }
    CalculateResult = () => {
        this.setState({
            total: this.state.maths + this.state.science + this.state.english
        });
    }
    UpdateMath = (event) =>{
        this.setState({
            maths:parseInt(event.target.value)
        });
        this.CalculateResult();
    }
    UpdateScience = (event) =>{
        this.setState({
            science:parseInt(event.target.value)
        });
        this.CalculateResult();
    }
    UpdateEnglish = (event) =>{
        this.setState({
            english:parseInt(event.target.value)
        });
        this.CalculateResult();
    }
    
    render() { 
        return ( 
                <tr>
                    <td width='20%'>
                        <input value={this.state.maths} type='number' className='form-control' placeholder='Maths' onChange={this.UpdateMath} />
                    </td>
                    <td width='20%'>
                        <input value={this.state.science} type='number' className='form-control' placeholder='Science' onChange={this.UpdateScience} />
                    </td>
                    <td width='20%'>
                        <input value={this.state.english} type='number' className='form-control' placeholder='English' onChange={this.UpdateEnglish} />
                    </td>
                    <td width='20%' align='right'>{this.state.total}</td>
                    <td width='20%' align='right'>{this.state.average}</td>
                </tr>
         );
    }
}
 
export default Marks;