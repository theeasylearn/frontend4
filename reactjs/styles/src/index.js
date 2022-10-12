import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Player from './ComponentStyleExample';
function ComponentStyleDemo()
{
  return(
    <div>
      <Player name='Ankit Patel' match='100' runs='10000' age='38' />
      <Player name='Param Patel' match='200' runs='20000' age='25' />
      <Player name='Jeet Patel' match='300' runs='30000' age='24' />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ComponentStyleDemo />);
