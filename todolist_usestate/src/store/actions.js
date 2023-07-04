import {
    ADD_TODO,
    CHANGE_EDIT,
    EDIT_TODO,
    DELETE_TODO,
    INPUT_CHANGE
} from './constants'
import storage from './storage'
// toán tử nullish ?? nếu null or undefined thì lấy vế sau
export const initState = storage.getStorage() ?? {
    todo: '',
    todos: []
}

export const addTodo = (payload) => ({
    action: ADD_TODO,
    payload
})

export const deleteTodo = (payload) => ({
    action: DELETE_TODO,
    payload
})

export const editTodo = (payload) => ({
    action: EDIT_TODO,
    payload
})

export const changeEdit = (payload) => ({
    action: CHANGE_EDIT,
    payload
})

export const inputChange = (payload) => ({
    action: INPUT_CHANGE,
    payload
})