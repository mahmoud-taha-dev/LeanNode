import {API_END, API_ERROR, API_START} from "./apiConstants";

export const apiStart = () => ({
  type: API_START,
  payload: ""
});

export const apiEnd = () => ({
  type: API_END,
  payload: ""
});

export const apiError = error => ({
  type: API_ERROR,
  error
})
