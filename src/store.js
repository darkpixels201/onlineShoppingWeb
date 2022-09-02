import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer,
    changeState
 } from './reducers/userReducer'
import { fetchProducts } from './Action/ProductAction'
import { productListReducer } from './reducers/productReducer'




const reducers = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    thefetchProducts: fetchProducts,
    changeState: changeState,
});

//  const rootReducer = (state, action) => {
//     return reducers(state, action);
// }

// export default rootReducer


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

    const nameFromStorage = localStorage.getItem('getname') ?
    JSON.parse(localStorage.getItem('getname')) : null    


    // const changeState = (state = initialState, { type, ...rest }) => {
    //     switch (type) {
    //       case 'set':
    //         return { ...state, ...rest }
    //       default:
    //         return state
    //     }
    //   }


const initialState = {
    userLogin: { userInfo: userInfoFromStorage, getname: nameFromStorage  },
    // userLogin: { namepayload: nameFromStorage },
}





const middleware = [thunk]
// // // const mynewstate = [changeState]

// const store = createStore(reducers,
//     composeWithDevTools(applyMiddleware(...middleware)),
//     )

// export default store

 
// import { createStore } from 'redux'

// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = {sidebarShow: true}, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }


const store = createStore(reducers, initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    )
export default store

