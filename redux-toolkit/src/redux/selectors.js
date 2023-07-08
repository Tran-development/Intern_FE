import { createSelector } from '@reduxjs/toolkit'


export const todoListSelector = (state) => state.todoList
export const selectFilterChange = (state) => state.filters.status // filterStatusSelector
export const priorityFilterChange = (state) => state.filters.priorities // filterPrioritiesSelector
export const searchTextSelector = (state) => state.filters.search
// reselect in redux-toolkit
export const todosRemainingSelector = createSelector(
    todoListSelector,
    selectFilterChange,
    searchTextSelector,
    priorityFilterChange,
    (todoList, status, searchText, priorities) => {
        // status => 'All', 'Completed', 'To do'
        return todoList.filter((todo) => {

            if (status === 'All') {
                // chi xem searchText co dang match hay khong
                return priorities?.length ?
                    todo.name.includes(searchText) &&
                    priorities.includes(todo.prioriry) :
                    todo.name.includes(searchText)
            }

            return (
                todo.name.includes(searchText) &&
                (status === 'Completed'
                    ? todo.completed
                    : !todo.completed
                ) && (priorities.length ? priorities.includes(todo.prioriry)
                : true)
            )

        })
    }
)