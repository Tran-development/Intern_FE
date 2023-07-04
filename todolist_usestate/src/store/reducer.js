import {
    ADD_TODO,
    CHANGE_EDIT,
    DELETE_TODO,
    EDIT_TODO,
    INPUT_CHANGE
} from './constants'
import storage from './storage'

function reducer(state, action) {
    switch(action.action) {
        case INPUT_CHANGE:
            return {
                ...state,
                todo: action.payload
            }
        case ADD_TODO:
            const addedTodos = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            storage.setStorage(addedTodos)
            return addedTodos
        case DELETE_TODO:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            const deletedTodo = {
                ...state,
                todos: newTodos
            }
            storage.setStorage(deletedTodo)
            return deletedTodo
        case EDIT_TODO:
            return {
                ...state, 
                todo: action.payload
            }
        case CHANGE_EDIT:
            const newChangesEditTodos = [...state.todos]
            newChangesEditTodos[action.payload.id] = action.payload.todo
            const changeEditedTodos = {
                todo: '',
                todos: newChangesEditTodos
            }
            storage.setStorage(changeEditedTodos)
            return changeEditedTodos
        default:
            throw new Error('Invalid Action')
    }
}

export default reducer