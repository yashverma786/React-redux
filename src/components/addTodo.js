//rafce + press tab to get boilerplate   function cmp
//rcc+ press tab to get boilerplate   class comp
import React from 'react'
import {connect } from 'react-redux';
import {addtodo} from '../../src/actions/index';
const addTodo = (props) => {
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            let input=e.target.userInput.value;
            props.dispatch(addtodo(input));
            e.target.userInput.value=''
        }}> 
            <input type="text" name="userInput"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default connect()(addTodo)
