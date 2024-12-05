import './components/todo/todo.css'
import './components/todo/TodoNew'
import TodoNew from './components/todo/TodoNew'
import TodoData from './components/todo/TodoData'
import Logo from './assets/react.svg'
const  App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData/>
      <div className='todo-image'>
        <img src={Logo} className='logo' />
      </div>
    </div>
  )
}

export default App
