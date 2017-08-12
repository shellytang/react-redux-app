import { combineReducers } from 'redux';
import BooksReducer from './reducers-books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
