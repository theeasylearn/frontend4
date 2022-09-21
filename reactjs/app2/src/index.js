import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//create class component
// class Page extends React.Component
// {
//     render(){
//       return (
//         <div className='container'>
//             <div className='row'>
//               <div className='col-12'>
//                   <h3 className='text-danger bg-light p-3'>Example of class component</h3>
//                   <hr/>
//                   <p>this is first example of class component which is advanced version of functional component</p>
//               </div>
//             </div>
//         </div>
//       )
//     }
// }
class Page extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
        name: 'The EasyLearn Academy',
        contact: '9662512857',
        year : 2008
      }
  }
  render(){
    return(
      <div className='container'>
          <div className='row'>
              <div className='col-12'>
                 <div className='card'>
                    <div className='card-header'>
                        <h3>Class Name  {this.state.name}</h3>
                    </div>
                    <div className='card-body'>
                        <b>contact no :- {this.state.contact}</b> <br/>
                        <b>Year :- {this.state.year}</b> <br/>
                    </div>
                 </div>
              </div>
          </div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />); 
