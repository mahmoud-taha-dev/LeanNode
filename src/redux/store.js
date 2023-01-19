import {createStore, combineReducers} from "redux";
import countriesReducer from "./features/countries/countriesReducer";

const reducers = combineReducers({countries: countriesReducer});

const store = createStore(reducers);

export default store;