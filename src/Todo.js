import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './Todo.css'
import { IconButton } from '@mui/material';
import db from './firebase';
import DoneAllIcon from '@mui/icons-material/DoneAll';
const Todo = ({todo,id,inprogress}) => {
    function del(){
        db.collection('todos').doc(id).delete();
        alert('Do you Want to delete')
    }
    function read(){
        db.collection('todos').doc(id).update({
            inprogress:false,
        })
    }
    return (
        <div className='Todo'>
            <div className='topm'>
            <h6 className='tim'>Todo</h6><p>{inprogress?'inprogress':'completed'}</p>
            </div>
            <p className={inprogress?`Tdes`:`tide`}>{todo}</p>
            <div className='Tico'>
            <IconButton className={'delh'} onClick={del}><DeleteIcon className={'comple'}/></IconButton>
            <IconButton className={inprogress?`r`:`n`} onClick={read}><DoneAllIcon className={inprogress?`read`:`non`}/></IconButton>
            </div>
        </div>
    );
};

export default Todo;