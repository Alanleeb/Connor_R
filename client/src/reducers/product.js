import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';
const PRODUCT = 'PRODUCT';

const productUpdate = (product) => {
    return { type: PRODUCT, product };
  }
  

export const updateProduct = (product, history) => {
    debugger
    return (dispatch) => {
      axios.post('/api/products', product)
        .then(res => {
          const { data: { data: product }, headers } = res;
          dispatch(setHeaders(headers));
          dispatch(productUpdate(product));
          history.push('/adminDashboard');
        })
        .catch(res => {
          let errors = res.response.data.errors ? res.response.data.errors : ['Something went wrong']
          if (!Array.isArray(errors))
            errors = [errors]
          const messages =
            errors.map( (message, i) =>
              <div key={i}>{message}</div>);
          const { headers } = res;
          dispatch(setHeaders(headers));
          dispatch(setFlash(messages, 'red'));
        });
    };
  };

  export default (state = {}, action) => {
    switch (action.type) {
      case PRODUCT:
      return action.product;
      default:
      return state;
    }
  };
  
  