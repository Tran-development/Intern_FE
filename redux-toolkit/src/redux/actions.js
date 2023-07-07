

export const addToDo = (data) => {
    return {
        type: 'todoList/addToDo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/selectFilterChange',
        payload: status
    }
}
export const prioritiesFilterChange = (priorities) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities
    }
}
