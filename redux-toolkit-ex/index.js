const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// action
const CAKE_ORDERED = 'CAKE_ORDERED'
const RESTOCKED_CAKE = 'RESTOCKED_CAKE'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const RESTOCKED_ICECREAM = 'RESTOCKED_ICECREAM'

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    }
}

function restockCake(qty = 1) {
    return {
        type: RESTOCKED_CAKE,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: RESTOCKED_ICECREAM,
        payload: qty
    }
}

// reducer
const initialStateCake = {
    numOfCakes: 10,
}

const initialStateIceCream = {
    numOfIceCreams: 20
}

// (preState, action) => newState

const cakeReducer = (state = initialStateCake, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
        case RESTOCKED_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducer = (state = initialStateIceCream, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            }
        case RESTOCKED_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// store
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState());

const unsubscribe = store.subscribe(() => {})
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(2))

const actions = bindActionCreators({
    orderCake, restockCake, orderIceCream, restockIceCream
}, store.dispatch)

actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)

actions.orderIceCream()
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)

unsubscribe()