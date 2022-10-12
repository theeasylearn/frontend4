import React, { Component } from 'react';
function Player(props)
{
        const {name,match,runs,age} = props;
        //create inline style using object
        const ulstyle = {border:'2px solid red',margin:'15px',padding:'5px',listStyleType:'none'}
        const listyle = {padding:'10px',backgroundColor:'gray',color:'white'}
        return(
            <ul style={ulstyle}>
                <li style={listyle}>Name {name}</li>
                <li style={listyle}>Match {match}</li>
                <li style={listyle}>runs {runs}</li>
                <li style={listyle}>age {age}</li>
            </ul>
        )
}
export default Player;