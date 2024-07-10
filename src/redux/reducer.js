import { ADD_TODO, REMOVE_ALL_TODOS, REMOVE_TODO } from "./action";

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo, id) => id !== action.payload)
            }
        case REMOVE_ALL_TODOS:
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}