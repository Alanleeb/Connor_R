import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';
const PRODUCTS = 'PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const productUpdate = (product) => {
    return { type: PRODUCTS, product };
  }

export const getProducts = () => {
  return (dispatch) => {
      axios.get('/api/products')
      .then(res => {
            dispatch({ type: PRODUCTS, products: res.data, headers: res.headers })
        })
    }
}

export const addProduct = (product) => {
  return (dispatch) => {
      axios.post('/api/products', { product })
      .then ( res => {
          dispatch({ type: ADD_PRODUCT, product: res.data, headers: res.headers })
          dispatch(setFlash(' Thank you ', 'green'))
      })
      .catch( (err) => dispatch(setFlash('Failed to submit your question, please try again', 'red')) )
  }
}


export const editProduct = (product) => {
  return (dispatch) => {
      axios.put('/api/products', { product })
      .then ( res => {
          dispatch({ type: EDIT_PRODUCT, product: res.data, headers: res.headers })
      })
  }
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

export default ( state = [], action ) => {
    switch (action.type) {
        case PRODUCTS:
            return action.contacts;
        case ADD_PRODUCT:
            return [action.contact, ...state];
        default:
            return state;
    }
}