import './components/todo/todo.css'
import './components/todo/TodoNew'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import Logo from './assets/react.svg'
import { useState } from 'react'
const  App = () => {

  const [todolist, setTodoList] = useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"},
    {id: 3, name: "Learning React"},
  ])

  const tidii = "Thiet do"
  const age = 21
  const data = {
    address : "Ha Noi",
    contry : "Viet Nam"
  }

  const addNewTodo =(name) =>{
    const newTodo={
      id: randomIntFromInterval(1,1000000),
      name: name
    }
    setTodoList([...todolist, newTodo])
    
  }
  const randomIntFromInterval =(min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }  
  
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
      addNewTodo={addNewTodo}/>
      <TodoData
      name={tidii}
      age={age}
      data={data}
      todolist={todolist}

      />
      <div className='todo-image'>
        <img src={Logo} className='logo' />
      </div>
    </div>
  )
}

export default App
