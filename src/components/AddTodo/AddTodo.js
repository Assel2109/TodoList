import React, {useState} from 'react'

function AddTodo  ({todo, setTodo})  {

    const [value, setValue] = useState('')

    function saveTodo()  {
        setTodo(
            [...todo, {
                id: 4,
                title: value,
                status: true
            }]
        )
    }

    return (
        <div>
            <input placeholder='Введите задачу' value={value} onChange={ (e)=>setValue(e.target.value)  }  />
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}

export default AddTodo