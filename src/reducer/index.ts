import { combineReducers } from "redux";
import { countRedcuer } from './count.reducer';
import { bookRedcuer } from './book.reducer';
export const rootReducers = combineReducers({ countRedcuer, bookRedcuer });