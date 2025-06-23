import AddTodo from './components/AddTodo'
import DisplayTodos from './components/DisplayTodos'
import './App.css'

function App() {
  return (
    <>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1>TODO LIST</h1>
      <AddTodo/>
      <DisplayTodos/>
    </div>
    </>
  )
}

export default App
