import { useState } from "react"


const TodoNew = (props) => {
    const { addNewTodo } = props
    // const valueInput = "Thiet Do"
    const [valueInput, setValueInput] = useState("Thiet Do")

    const handleClick = () => {
        {
            valueInput === "" ?
            alert(" Bạn cần nhập dữ liệu! ")
            :
            addNewTodo(valueInput)
            setValueInput("")
        }

    }


    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}>Add
            </button>
        </div>
    )
}

export default TodoNew
