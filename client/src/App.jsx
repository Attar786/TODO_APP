import Todo from './components/Todo'
import './App.css'
import { useEffect, useState } from 'react'
import { Add_Data, get_all_data } from './utils/handle'



function App() {

  const [todo, setTodo] = useState([])
  const [text, settext] = useState("")
  useEffect(()=>
  {
    get_all_data(setTodo)
 
  },[])
   return (
    <>
    <div className="container">
      <h1>To Do App In MERN-Stack</h1>
      <div className="top">
      <input type="text" placeholder='Enter a todo work' />
      <button onClick={Add_Data} value={text}  onChange={(e)=> settext(e.target.value)}>Add Todo</button>
      </div>
<div className="table">

{todo.map((item)=> <Todo key= {item._id} text= {item.text}/>)}

</div>
    </div>
    </>
  )
}

export default App
