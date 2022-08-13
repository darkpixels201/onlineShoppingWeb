// All KeyWords
// [sizes',  colors',products', discounts', categories', productVariants']

// User Sigup

import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL  } from '../constants/productConstant'


import axios from "axios";

export const listProducts = () =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

    //   const config = {
    //     headers: {
    //          Accept: 'application/json',
    //          Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
    //        }
    // }
      const { data } = await axios.get('https://onlineshopping.dreamhosters.com/api/products');
      console.log("Action Data", data.response);
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
        Accept: 'application/json',
        Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
        // headers: {
          
        // }
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

// // Get Request
// import axios from "axios";

// export const listProducts = {
//   method: 'GET',
//   type: PRODUCT_LIST_REQUEST ,
//   url: 'https://onlineshopping.dreamhosters.com/api/products',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
//   }
// };

// axios.request(listProducts).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// // Get by Id Request
// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'http://127.0.0.1:8000/api/categories/5',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// // Post Request
// import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'http://127.0.0.1:8000/api/categories',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
//   },
//   data: {name: 'HOTCAT'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// // Put Request
// import axios from "axios";

// const Options = {
//   method: 'PUT',
//   url: 'http://127.0.0.1:8000/api/categories/5',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
//   },
//   data: {name: 'HOTCAT5'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

// // Delete Request
// import axios from "axios";

// const options = {
//   method: 'DELETE',
//   url: 'http://127.0.0.1:8000/api/categories/5',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
//   },
//   data: {name: 'HOTCAT5'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });