import { createStore, combineReducers } from "redux";
import forcastReducer from '../reducers/forcastReducer'
import favoritesReducer from '../reducers/favoritesReducer'

const reducer = combineReducers({
    forcastReducer: forcastReducer,
    favoritesReducer: favoritesReducer
  });
  
const myStore = createStore(reducer);
  
export default myStore;