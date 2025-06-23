import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/TodoSlice"
const AddTodo = () => {
  const [input, setinput] = useState('');
  const dispatch=useDispatch();
  const submit=()=>{
    console.log(input)
    dispatch(addTodo(input));
    setinput('');
  }
  return (
   <>
      <div style={{display:'flex' , alignItems:'center'}}>
        <input
          type="text"
          style={{padding:'10px', marginRight:'5px'}}
          value={input}
          onChange={(e)=>setinput(e.target.value)}
        />
        <button type="button" className="btn btn-secondary" onClick={submit}>Add</button>
      </div>
   </>
  )
}

export default AddTodo;
