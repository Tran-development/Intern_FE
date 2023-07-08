// import { legacy_createStore as createStore } from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composedEnhancers = composeWithDevTools()
// // rootReducer, initValue, enhancers
// const store = createStore(rootReducer, composedEnhancers)

// export default store

// with redux toolkit
import { configureStore } from '@reduxjs/toolkit'
import {filtersSlide} from '../components/Filters/filterSlice'
import {todosSlice} from '../components/TodoList/todosSlice'

const store = configureStore({
    reducer: {
        filters: filtersSlide.reducer,
        todoList: todosSlice.reducer,
    },
})

export default store