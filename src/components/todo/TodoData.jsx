// cach 3 TodoData = ({ name }) => {
const TodoData = (props) => {

    // cach1 
    const { todolist, delTodo } = props

    // cach 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data
    const onClickDel = (id) => {
        delTodo(id)
    }
    console.log(">>> check props: ", todolist);

    return (
        <div className='todo-data'>
            {todolist.map((item, index) => {
                console.log(">>> check map", item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => onClickDel(item.id)}>Del</button>
                    </div>

                )
            })}
        </div>
    )
}

export default TodoData