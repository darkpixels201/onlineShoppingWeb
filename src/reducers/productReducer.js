import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL  } from '../constants/productConstant'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] };
  
      case PRODUCT_LIST_SUCCESS:
        return {
        //   ...state,  
          loading: false,
          products: action.payload, // Products ki waja say error tha
          // products: action.payload.products, agar yea likhay gy to ProShop wala project chalay ga
          // products: action.payload, agar yea likay gy to yea baki Projects kay liya ho ga
        //   page: action.payload.page,
        //   pages: action.payload.pages,
        };
  
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };

  let initialState = {
    sidebarShow: true,

  }

  export const changeState = (state =  initialState, action) => {
    switch (action.type) {
      case 'set':
        return { ...state, ...action.payload }
      default:
        return state
    }
  }