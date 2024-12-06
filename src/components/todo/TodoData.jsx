// cach 3 TodoData = ({ name }) => {
const TodoData = (props) => {

    // cach1 
    const { todolist } = props

    // cach 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data

    console.log(">>> check props: ", todolist);

    return (
        <div className='todo-data'>
            {todolist.map((item, index) => {
                console.log(">>> check map", item, index)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Del</button>
                    </div>
                    
                )
            })}

            <div>
                {JSON.stringify(props.todolist)}
            </div>
        </div>
    )
}

export default TodoData