import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers, createStore, applyMiddleware} from 'redux';

//import initial state
import userState from ".user/initialState";

//import reducers
import userReducer from "./user/reducer";


const initialState = {
    user:userState,
};

const rootReducer = combineReducers({
    user: userReducer,
});

const configureStore = () => {
    return createStore(rootReducer,initialState,applyMiddleware(thunk, logger) )
};

const store = configureStore();

export default store;

