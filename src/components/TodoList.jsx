import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAllTodos, removeTodo } from '../redux/action';
import { FaRegTrashAlt } from "react-icons/fa";
import { Checkbox } from 'antd';

const TodoList = () => {
  const [todo, setTodo] = useState('')
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (todo === '') {
      alert('Please, enter todo!')
    } else {
      dispatch(addTodo(todo))
      setTodo('')
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos())
  }

  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    const newChecked = [...checked]
    newChecked[id] = !newChecked[id]
    setChecked(newChecked);
  }
  return (
    <div className='todo-list'>
      <h2>Todo-List</h2>
      <div className='add-todo'>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder='Add new todo...' />
        <button onClick={handleAddTodo}>ADD</button>
      </div>
      <div className="todos">
        <ul>
          {todos.map((todo, id) => (
            <li key={id}>
              <div className='todo'>
                <Checkbox onChange={() => handleCheck(id)} className='checkbox'></Checkbox>
                <label className={`${checked[id] ? 'line-through' : ''}`}>{todo}</label>
              </div>
              <button onClick={() => handleRemoveTodo(id)}><FaRegTrashAlt /></button>
            </li>
          ))}
          {todos.length > 1 && <button className='delete' onClick={() => handleRemoveAllTodos()}>Delete</button>}
        </ul>
      </div>
    </div>
  )
}

export default TodoList