import {combineReducers, createStore as reduxCreateStore} from "redux"
import weaponsDataReducer from "./weaponsDataReducer";

const rootReducer = combineReducers({
    weaponsData: weaponsDataReducer
});

const createStore = () => reduxCreateStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default createStore