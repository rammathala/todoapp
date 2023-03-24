import { useEffect, useState } from 'react';
import './App.css';
import Input from './Input';
import Todolist from './Todolist';
import db from './firebase'
import BackpackIcon from '@mui/icons-material/Backpack';

function App() {
  const [input,setinput] = useState('');
  const [todos,settodos] = useState([]);
function atd(e){
  setinput(e.target.value)
}
function add(e){
  e.preventDefault();
  db.collection("todos").add({
    inprogress:true,
    todo:input,
  })
 //settodos([...todos, input]);
  setinput('');
}
useEffect(()=>{
  gettodos();
},[]);
function gettodos(){
  db.collection('todos').onSnapshot(function(querySnapshot){
    settodos(
      querySnapshot.docs.map((doc)=>({
        id:doc.id,
        todo:doc.data().todo,
        inprogress:doc.data().inprogress,
      }))
    );
  });
}


  return (
    <div className="App">
      <Input input={input} fun={atd} add={add}/>
      <h3 className='count'><BackpackIcon/><p>{todos.length}</p></h3>
      <Todolist todos = {todos}/>
    </div>
  );
}

export default App;
