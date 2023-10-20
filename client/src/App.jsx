import Todo from './components/todo'
import './App.css'

function App() {
  
  return (
    <>
    <div className="container">
      <h1>To Do App In MERN-Stack</h1>
      <div className="top">
      <input type="text" placeholder='Enter a todo work' />
      <button>Add Todo</button>
      </div>
<div className="table">
  <Todo text= "Hello"/>
</div>
    </div>
    </>
  )
}

export default App
