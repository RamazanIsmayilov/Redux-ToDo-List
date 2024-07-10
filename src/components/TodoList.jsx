import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeAllTodos, removeTodo } from '../redux/action';
import { FaRegTrashAlt } from "react-icons/fa";

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
    dispatch(removeTodo(id));
  };

  const handleRemoveAllTodos = () => {
    dispatch(removeAllTodos())
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
              {todo}
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