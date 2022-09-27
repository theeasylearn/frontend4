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
        this.state.total = this.state.maths + this.state.science + this.state.english;
        this.state.average = (this.state.total / 3).toFixed(2);
        this.setState({
            total: this.state.total,
            average : this.state.average
        });
    }
    UpdateMath = (event) =>{
        this.state.maths = parseInt(event.target.value);
        this.setState({
            maths: this.state.maths
        });
        this.CalculateResult();
    }
    UpdateScience = (event) =>{
        this.state.science = parseInt(event.target.value);
        this.setState({
            science:this.state.science
        });
        this.CalculateResult();
    }
    UpdateEnglish = (event) =>{
        this.state.english = parseInt(event.target.value);
        this.setState({
            english:this.state.english
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