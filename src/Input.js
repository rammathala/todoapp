import { Button, TextField, } from '@mui/material';
import React from 'react';
import './Input.css'
const Input = ({input,fun,add}) => {
    return (
        <div className='conte'>
            <div className='Input'>
             <h1>Todo Web App</h1>
             <form >
            <TextField className='textf'
            id="standard-basic" label="Todo..." variant="standard" value={input}  type='text' onChange={fun}/>      
            <Button type='submit' disabled={!input} color='primary' variant='contained'
             onClick={add}>Add Todo</Button>
             </form>
        </div>
        </div>
    );
};

export default Input;