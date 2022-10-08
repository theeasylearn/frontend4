import React,{useState} from "react";
function ControlledAccessForm2()
{
    const [length,setLength] = useState('');
    const [width,setWidth] = useState('');
    const [result,setResult] = useState('');
    const onSubmitForm = (event) =>{
        event.preventDefault();
        console.log(length);
        console.log(width);
        var area = parseInt(length) * parseInt(width);
        setResult(area);
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Controlled approach part 2</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmitForm}>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" name="length" placeholder="Length" required value={length} 
                                    onChange={(event)=> setLength(event.target.value)} />
                                    <label htmlFor="length">Length</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" name="width" placeholder="Width" required 
                                    value={width} onChange={(event) => setWidth(event.target.value)}  />
                                    <label htmlFor="width">Width</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Calculate Area</button>
                                <div className='mt-3'><h4>{result}</h4></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ControlledAccessForm2