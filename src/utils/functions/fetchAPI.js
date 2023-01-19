import axios from "axios";
import {apiEnd, apiStart} from "../../redux/features/apiActions";
import {API} from "../../redux/features/apiConstants";

export const fetchAPI = async (dispatch, action) => {
  const {
    url,
    onSuccess,
    onFailure,
  } = action.payload;
  if (action.type !== API) return;
  dispatch(apiStart());
  
  axios.get(url).then(({data}) => {
    dispatch(onSuccess(data));
  }).catch((error) => {
    dispatch(onFailure(error));
  }).finally(() => {
    dispatch(apiEnd());
  })
};