import React from 'react';
import ReactDOM from 'react-dom/client';
import Subject from './Subject';
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
// class Page extends React.Component
// {
//   constructor(props)
//   {
//       super(props);
//       this.state = {
//         name: 'The EasyLearn Academy',
//         contact: '9662512857',
//         year : 2008
//       }
//   }
//   render(){
//     return(
//       <div className='container'>
//           <div className='row'>
//               <div className='col-12'>
//                  <div className='card'>
//                     <div className='card-header'>
//                         <h3>Class Name  {this.state.name}</h3>
//                     </div>
//                     <div className='card-body'>
//                         <b>contact no :- {this.state.contact}</b> <br/>
//                         <b>Year :- {this.state.year}</b> <br/>
//                     </div>
//                  </div>
//               </div>
//           </div>
//       </div>
//     );
//   }
// }
// class Page extends React.Component
// {
//   constructor(props)
//   {
//       super(props);
//       this.state = {
//         name: 'The EasyLearn Academy',
//         contact: '9662512857',
//         year : 2008
//       }
//   }
//   render(){
//     return(
//       <div className='container'>
//           <div className='row'>
//               <div className='col-12'>
//                  <div className='card'>
//                     <div className='card-header'>
//                         <h3>Class Name  {this.state.name}</h3>
//                     </div>
//                     <div className='card-body'>
//                         <b>contact no :- {this.state.contact}</b> <br/>
//                         <b>Year :- {this.state.year}</b> <br/>
//                     </div>
//                  </div>
//               </div>
//           </div>
//       </div>
//     );
//   }
// }
class Movie extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state = {
        name: this.props.name,
        starcast: this.props.starcast,
        photo : this.props.photo
      }
  }
  render(){
    return(
      <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
          <div className='card shadow'>
            <div className='card-header'>
                <h3>{this.state.name}</h3>
            </div>
            <div className='card-body'>
                <img src={this.state.photo} className='img-fluid img-thumbnail' />
            </div>
            <div className='card-footer'>
                <b>Start cast :- {this.state.starcast}</b>
            </div>
          </div>
      </div>
    );
  }
}
function Cinema()
{
    return (
      <div className='container'>
        <div className='row mb-3'>
            <div className='col-12'>
                <h3>Current Showing</h3> <hr/>
            </div>
        </div>
        <div className='row'>
            <Movie name='Bahubali' starcast='Prabhash, Katappa' photo='https://picsum.photos/300?random=1' />
            <Movie name='KGF' starcast='Yash, sanjay dutt, ravina tandan' photo='https://picsum.photos/300?random=2' />
            <Movie name='Pushpa' starcast='Allu Argun, Rashmika' photo='https://picsum.photos/300?random=3' />
            <Movie name='RRR' starcast='Ajay Devgan, Junior NTR,' photo='https://picsum.photos/300?random=4' />
            <Movie name='Robot' starcast='Rajnikant, Akashay kumar' photo='https://picsum.photos/300?random=5' />
            <Movie name='Vikram Vedha' starcast='saif ali khan, Rutwik roshan' photo='https://picsum.photos/300?random=6' />
        </div>
      </div>
    )
}
function Course()
{
    return (
      <div className='container'>
        <div className='row mb-3'>
            <div className='col-12'>
                <h3>Course subjects</h3> <hr/>
            </div>
        </div>
        <div className='row'>
              <Subject name='React js' duration='30' />
              <Subject name='Node js' duration='30' />
              <Subject name='Bootstrap' duration='15' />
              <Subject name='css' duration='15' />
        </div>
      </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Course />); 
