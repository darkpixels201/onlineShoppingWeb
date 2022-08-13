import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'
import { fetchProducts } from './Action/ProductAction'
import { productListReducer } from './reducers/productReducer'


const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    thefetchProducts: fetchProducts,
});



const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

    const nameFromStorage = localStorage.getItem('getname') ?
    JSON.parse(localStorage.getItem('getname')) : null    


const initialState = {
    userLogin: { userInfo: userInfoFromStorage, getname: nameFromStorage  },
    // userLogin: { namepayload: nameFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store