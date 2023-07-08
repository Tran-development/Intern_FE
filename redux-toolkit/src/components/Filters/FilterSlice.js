

// const initState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filterReducer = (state = initState, action) => {
//     // console.log({ state, action });
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                     ...state,
//                     search: action.payload
//             }
//         case 'filters/selectFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//              }
//         case 'filters/prioritiesFilterChange': 
//         return {
//             ...state,
//             priorities: action.payload
//         }
//         default:
//             return state
//     }
// }

// export default filterReducer

// cau hinh reducer with redux toolkit
import { createSlice } from '@reduxjs/toolkit'

// cac slide la cac manh cat trong reducer lon
export const filtersSlide = createSlice({
    name: 'filters', 
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            // mutation (thao tac truc tiep len mot ob hay arr nao do) | IMMER
            //    ...state : khong can phai coppy state nua
            state.search = action.payload
        }, // => {type: 'filters/searchFilterChange'}
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload
        }
    }
})
// => khong can khai bao action roi viet tung case, roi phai coppy state hien tai cho case