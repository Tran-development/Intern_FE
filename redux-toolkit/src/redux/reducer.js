
import { combineReducers } from 'redux'

import filterReducer from "../components/Filters/FilterSlice"
import todoListReducer from "../components/TodoList/TodosSlice"


// const rootReducer = (state = {}, action) => {
//    return {
//     // split reducer : chia theo tung chuc nang
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//    }
// }

// ta co the sd cai ham combine nay thay cho cach viet tuong minh o tren
const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoListReducer
})

export default rootReducer