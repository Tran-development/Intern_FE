import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools()
// rootReducer, initValue, enhancers
const store = createStore(rootReducer, composedEnhancers)

export default store