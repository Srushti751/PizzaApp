import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { pizzaReducer } from './reducers/pizzaReducer'
import { userReducer,loginUserReducer } from './reducers/userReducer'


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
const rootReducer = combineReducers({
    pizzaReducer:pizzaReducer,
    userReducer:userReducer,
    loginUserReducer:loginUserReducer
})
const middleware=[thunk]

const initialState = {
    loginUserReducer:{
        currentUser: currentUser
    }
}
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;