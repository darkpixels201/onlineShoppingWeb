// // All KeyWords
// // [sizes',  colors',products', discounts', categories', productVariants']

// // User Sigup

// import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL  } from '../constants/productConstant'


// import axios from "axios";
// import { useDispatch } from 'react-redux';



// // export const listProducts =
// //   async (dispatch) => {
// //     try {
// //       dispatch({ type: PRODUCT_LIST_REQUEST });

// //       const { data } = await axios.get('https://onlineshopping.dreamhosters.com/api/products');
// //       console.log("Action Data", data);
// //             const config = {
// //             headers: {
// //               Accept: 'application/json',
// //               Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
// //            }
// //     }
// //       dispatch({
// //         type: PRODUCT_LIST_SUCCESS,
// //         payload: data,
// //         config
// //       });
// //     } catch (error) {
// //       dispatch({
// //         type: PRODUCT_LIST_FAIL,
// //         payload:
// //           error.response && error.response.data.detail
// //             ? error.response.data.detail
// //             : error.message,
// //       });
// //     }
// //   };


// //    EXTRA EXTRA EXTRA
// // const Product = {
// //   products: () => {
// //     return axios.get('https://onlineshopping.dreamhosters.com/api/products')
// //   }
// // }


// // export function listProducts () {

// //   return function (dispatch, getstate) {
// //     dispatch({
// //       type: PRODUCT_LIST_REQUEST 
// //     });

// //     Product.products().then(response => {
// //       console.log("main DATA", response.data);
// //       dispatch({
// //         type: PRODUCT_LIST_SUCCESS,
// //         payload: response.data.data,
// //     });
// //     }).catch(error => {
// //       dispatch({
// //         type: PRODUCT_LIST_FAIL,
// //         error: error.response.data
// //       })
// //     })
// //   }
// // }

// // // Get Request
// // import axios from "axios";

// // dispatch: ({ type: PRODUCT_LIST_REQUEST }),

// import React from 'react'

// function productAction() {

// const dispatch = useDispatch();

//   const listProducts = {
//     method: 'GET',
//   //  type: PRODUCT_LIST_REQUEST,
//     url: 'https://onlineshopping.dreamhosters.com/api/products',
//     headers: {
//       Accept: 'application/json',
//       Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
//     }
//   };
  
//   axios.request(listProducts).then(function (response) {
//     console.log(response.data);
//     dispatch ({ type: PRODUCT_LIST_REQUEST })
  
//   }).catch(function (error) {
//     console.error(error);
//   });

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default productAction

// // export const listProducts = {
// //   method: 'GET',
// // //  type: PRODUCT_LIST_REQUEST,
// //   url: 'https://onlineshopping.dreamhosters.com/api/products',
// //   headers: {
// //     Accept: 'application/json',
// //     Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
// //   }
// // };

// // axios.request(listProducts).then(function (response) {
// //   console.log(response.data);
// //   dispatch ({ type: PRODUCT_LIST_REQUEST })

// // }).catch(function (error) {
// //   console.error(error);
// // });


// // export async function listProducts()
// // {
// //   try{
    
// //     let data = await fetch("https://onlineshopping.dreamhosters.com/api/products",{

// //       method: "GET",
// //       headers: {
// //             Accept: 'application/json',
// //             Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
// //           }
// //     })
// //     data = await data.json()
// //     localStorage.setItem('products',JSON.stringify(data))
// //     console.log("The New One", data)
// //   }catch(error){

// //   }
  
// // }


// // redux by Medium

// // export const listProducts = () => {

// //   return async function (dispatch) {
  
// //       try {
// //         dispatch ({ type: PRODUCT_LIST_REQUEST });
// //             let response = await fetch("https://onlineshopping.dreamhosters.com/api/products", {
// //                 method: "GET",
// //                 headers: {
// //                         Accept: 'application/json',
// //                       Authorization: 'Bearer 3|X0z56Has1npKkVD9xDcWov91jBmtci6M6RDkdUlY'
// //                     }
// //             })
      
// //             let responseJSON = await response.json()
// //             console.log("responseJSON",responseJSON)
// //             function dispatchLogin ( resp ) { 
// //               dispatch( { 
// //                 type: PRODUCT_LIST_SUCCESS,
// //                 payload: resp.data,
// //             }) 
// //              }

// //             return dispatchLogin( await responseJSON )
      
// //       } catch (error) { 
// //         dispatch ({ type: PRODUCT_LIST_FAIL });
// //             console.error(error)
// //       }
// //     }
// //   }






// // // Get by Id Request
// // import axios from "axios";

// // const options = {
// //   method: 'GET',
// //   url: 'http://127.0.0.1:8000/api/categories/5',
// //   headers: {
// //     Accept: 'application/json',
// //     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
// //   }
// // };

// // axios.request(options).then(function (response) {
// //   console.log(response.data);
// // }).catch(function (error) {
// //   console.error(error);
// // });

// // // Post Request
// // import axios from "axios";

// // const options = {
// //   method: 'POST',
// //   url: 'http://127.0.0.1:8000/api/categories',
// //   headers: {
// //     Accept: 'application/json',
// //     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
// //   },
// //   data: {name: 'HOTCAT'}
// // };

// // axios.request(options).then(function (response) {
// //   console.log(response.data);
// // }).catch(function (error) {
// //   console.error(error);
// // });

// // // Put Request
// // import axios from "axios";

// // const Options = {
// //   method: 'PUT',
// //   url: 'http://127.0.0.1:8000/api/categories/5',
// //   headers: {
// //     Accept: 'application/json',
// //     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
// //   },
// //   data: {name: 'HOTCAT5'}
// // };

// // axios.request(options).then(function (response) {
// //   console.log(response.data);
// // }).catch(function (error) {
// //   console.error(error);
// // });

// // // Delete Request
// // import axios from "axios";

// // const options = {
// //   method: 'DELETE',
// //   url: 'http://127.0.0.1:8000/api/categories/5',
// //   headers: {
// //     Accept: 'application/json',
// //     Authorization: 'Bearer 1|z5rRyOhymWDG2boB9eParKo96fjveqoYN8y88z1O'
// //   },
// //   data: {name: 'HOTCAT5'}
// // };

// // axios.request(options).then(function (response) {
// //   console.log(response.data);
// // }).catch(function (error) {
// //   console.error(error);
// // });