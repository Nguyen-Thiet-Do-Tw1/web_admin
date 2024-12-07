import './todo.css'
import './TodoNew'
import TodoNew from './TodoNew'
import TodoData from './TodoData'
import Logo from '../../assets/react.svg'
import { useState } from 'react'
const TodoApp= () =>{
    const [todolist, setTodoList] = useState([
        {id: 1, name: "Nguyen Thiet Do"}
      ])
    
      const addNewTodo = (name) => {
        const newTodo = {
          id: randomIntFromInterval(1, 1000000),
          name: name
        }
        setTodoList([...todolist, newTodo])
      }
    
      const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    
      const delTodo = (id) => {
        const newTodo = todolist.filter(item => item.id !== id)
    
        setTodoList(newTodo)
    
      }
    return (
        
        <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo} />

        {todolist.length > 0 ?
          <TodoData
            todolist={todolist}
            delTodo={delTodo}
          />
          :
          <div className='todo-image'>
            <img src={Logo} className='logo' />
          </div>
        }
      </div>
    )
}

export default TodoApp
