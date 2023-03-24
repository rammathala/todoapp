import React from 'react';
import Todo from './Todo';
import "./Todolist.css"
const Todolist = ({todos}) => {
    return (
        <div className='Todolist'>
            {todos.map(tod =>(
        <Todo todo = {tod.todo} id={tod.id} inprogress={tod.inprogress}/>
      ))}
        </div>
    );
};

export default Todolist;