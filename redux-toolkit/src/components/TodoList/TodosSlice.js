

// const initState = [
//     { id: 1, name: 'Learn Redux', completed: false, prioriry: 'Medium' },
//     { id: 2, name: 'Learn Hooks', completed: true, prioriry: 'Low' },
//     { id: 3, name: 'Learn React', completed: false, priority: 'High' },
// ]

// const todoListReducer = (state = initState, action) => {
//     console.log({ state, action });
//     switch (action.type) {
//         case 'todoList/addToDo':
//             return [
//                 ...state,
//                 action.payload
//             ]
//         case 'todoList/toggleTodoStatus':
//             return state.map(todo => todo.id === action.payload ? 
//                 {...todo, completed: !todo.completed} : todo)
//         default:
//             return state
//     }
// }

// export default todoListReducer

import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'Learn Redux', completed: false, prioriry: 'Medium' },
        { id: 2, name: 'Learn Hooks', completed: true, prioriry: 'Low' },
    ],
    // thay vi viet cac action creators o file action
    // thi bay gio no se tu dong tao ra o day
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }, // action creators
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed
            }
        }
    }
})

export const { addToDo, toggleTodoStatus } = todosSlice.actions;