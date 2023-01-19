import {fetchAPI} from "../../../utils/functions/fetchAPI";
import {apiError} from "../apiActions";
import {API} from "../apiConstants";
import {
  SET_COUNTRIES_DATA,
  ADD_NEW_COUNTRY, UPDATE_COUNTRY,
} from "./actionConstants";

export const addNewCountry = (payload) => ({
  type: ADD_NEW_COUNTRY,
  payload,
})

export const updateCountry = (payload) => ({
  type: UPDATE_COUNTRY,
  payload,
})

const setCountriesData = (data) => {
  return {
    type: SET_COUNTRIES_DATA,
    payload: data
  };
}


export const fetchCountries = (dispatch) => {
  fetchAPI(dispatch, {
    type: API,
    payload: {
      url: "https://restcountries.com/v2/all",
      onSuccess: setCountriesData,
      onFailure: apiError,
    }
  })
}