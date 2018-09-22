import axios from "axios";
import { setHeaders } from "../reducers/headers";

export const addProduct = product => {
  return dispatch => {
    axios.post("/api/products", { product })
    .then(res => {
      dispatch({ type: "ADD_PRODUCT", product: res.data });
      dispatch(setHeaders(res.headers));
    });
  };
};
