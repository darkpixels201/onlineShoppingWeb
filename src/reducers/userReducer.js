import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
 } from "../constants/userConstant";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload, getname: action.namepayload}

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}


export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

// export const changeState = (state = { sidebarShow: true }, action) => {
//     switch (action.type) {
//         case 'DRAWER_REDUCER_SET':
//             return { sidebarShow: action.payload.sidebarShow }
//         default:
//             return state
//     }
// }
// const initialState = {
//     sidebarShow: true,
//   }
  
//  export const changeState = (state = initialState, { type, ...rest }) => {
//     switch (type) {
//       case 'set':
//         return { ...state, ...rest }
//       default:
//         return state
//     }
//   }

// New One
export const changeState = (state = {sidebarShow: true}, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return { ...state, ...rest }
      default:
        return state
    }
  }
