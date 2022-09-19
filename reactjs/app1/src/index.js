import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// day 1
// example 1
// const output = <div className='container'><div className='row'><div className='col-12'><h1>First Example in React</h1><hr/><p>this is first line in react <br/> this is second line in react</p></div></div></div>

//example 2(use of expression)
// let number1 = 10;
// let number2 = 3;
// let output = <div className='container'><div className='row'><div className='col-12'><h1>Expression in javascript </h1> <hr/> <b>we can display variables & we can use Expression in javascript <br/></b>{number1} + {number2} = {number1 + number2} <br/> {number1} - {number2} = {number1 - number2}</div></div></div>

//example 3 
// const Page = (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-12'>
//                 <h1>Multiline output using parenthesis</h1>
//                 <table className='table table-bordered table-striped'>
//                     <tr>
//                         <th>Sr No</th>
//                         <th>Name</th>
//                         <th>Contact No</th>
//                     </tr>
//                     <tr>
//                         <td>1</td>
//                         <td>Ram</td>
//                         <td>1234567890</td>
//                     </tr>
//                     <tr>
//                         <td>2</td>
//                         <td>Krishna</td>
//                         <td>1122334455</td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//     </div>
// )

// const Page = (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-3'>
//                 <h1>List</h1>
//                 <ul className='list-group'>
//                     <li className='list-group-item'>India</li>
//                     <li className='list-group-item'>USA</li>
//                     <li className='list-group-item'>China</li>
//                     <li className='list-group-item'>France</li>
//                     <li className='list-group-item'>Britain</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// );
// const Page = (
//     <div className='container'>
//         <div className='row mt-5'>
//             <div className='col-lg-6 offset-3'>
//                 <div className='card shadow'>
//                     <div className='card-header text-bg-primary'>
//                         <h3>Login Form</h3>
//                     </div>
//                     <div className='card-body'>
//                         <form>
//                             <div className='mb-3'>
//                                 <input type='email' className='form-control' placeholder='Email' />
//                             </div>
//                             <div className='mb-3'>
//                                 <input type='password' className='form-control' placeholder='password' />
//                             </div>
//                             <div>
//                                 <button className='btn btn-primary'>Login</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// )
// function getGender(student)
// {
//     if(student.gender==true)
//         return <b>Male</b>
//     else 
//         return <b>Female</b>
// }
// function DisplayDetail(student)
// {
//     return(
//         <div className='container'>
//         <div className='row'>
//             <div className='col-6'>
//                 <h1>Student Detail</h1>
//                 <ul className='list-group'>
//                     <li className='list-group-item'>Name : {student.name}</li>
//                     <li className='list-group-item'>Age : {student.age}</li>
//                     <li className='list-group-item'>Weight : {student.weight}</li>
//                     <li className='list-group-item'>gender : {getGender(student)}</li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     );
// }
// let student = {
//     name: "Divya boghra",
//     age : 21,
//     weight : 50.22,
//     gender: false
// }
function DisplayCurrentDateTime()
{
    var output = (
        <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>Date & time</h1>
                <hr/>
                <button className='btn btn-primary'>{new Date().toLocaleTimeString()}</button>
                <hr/>
                <button className='btn btn-danger'>{new Date().getDate()} - {new Date().getMonth()} - {new Date().getFullYear()}</button>
            </div>
        </div>
    </div>
    )
    root.render(output)
}
setInterval(DisplayCurrentDateTime,1000);