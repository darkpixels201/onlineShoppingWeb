import axios from 'axios';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL  } from '../constants/productConstant'


export const productAction = (dispatch) => {

  
console.log("This is Api Call");
  
  const listProducts = {
    method: 'GET',
    url: 'https://onlineshopping.dreamhosters.com/api/products',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer 2|XHLStJdoVAPrxNtAn2ewfJw0Hq73TUwh0kgM9AK2'
    }
  };
  
    dispatch ({ type: PRODUCT_LIST_REQUEST })

    axios.request(listProducts).then(function (response) {
    console.log(response.data);
    dispatch ({ type: PRODUCT_LIST_SUCCESS, payload: response.data })
  

  }).catch(function (error) {
    console.error(error);
    dispatch ({ type: PRODUCT_LIST_FAIL })

  });
}
