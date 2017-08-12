import { combineReducers } from 'redux';
import BooksReducer from './reducers-books';
import ActiveBook from './reducers-active-book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
