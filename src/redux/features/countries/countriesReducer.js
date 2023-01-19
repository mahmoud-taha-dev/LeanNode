import {API_END, API_START} from "../apiConstants";
import {ADD_NEW_COUNTRY, SET_COUNTRIES_DATA, UPDATE_COUNTRY} from "./actionConstants";

const initialState = {
  data: [],
  isLoadingData: false,
  isDataFetched: false
}
const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case ADD_NEW_COUNTRY:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    case UPDATE_COUNTRY:
      return {
        ...state,
        data: action.payload,
      };
    case API_START:
      return {
        ...state,
        isLoadingData: true
      };
    case API_END:
      return {
        ...state,
        isLoadingData: false,
        isDataFetched: true,
      };
    default:
      return state;
  }
}

export default countriesReducer;