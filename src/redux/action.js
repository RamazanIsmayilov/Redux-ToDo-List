export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REMOVE_ALL_TODOS = 'REMOVE_ALL_TODOS'

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})

export const removeAllTodos = () => ({
    type: REMOVE_ALL_TODOS
})