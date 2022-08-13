import axios from "axios";
// import Baseurl from "../components/Auth/Baseurl";
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL, 
    
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,


} from "../constants/userConstant";


export const login = (email, Password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        const { data } = await axios.get(
            "https://pda.dreamhosters.com/Api/"+"Users/CheckUser.php?email="+email+"&password="+Password,
            config
        );
        console.log("Action Data", data)
        console.log("New Data", data.user)
        // const namedata = data.user;
        // console.log("New New New New", namedata)
        
        dispatch ({
            type: USER_LOGIN_SUCCESS,
            payload: data,
            namepayload: data.user.name
        })

    localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("getname", JSON.stringify(data.user.name));
    } catch(error) {
        dispatch ({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        });
       
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    // dispatch({ type: USER_DETAILS_RESET });
    // dispatch({ type: ORDER_LIST_MY_RESET });
    // dispatch({ type: USER_LIST_RESET });
  };


  export const signup = (userName, userEmail, userPassword, confrimUserPassword) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
  
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };
  
      const { data } = await axios.post(
        "https://onlineshopping.dreamhosters.com/api/signup",
        JSON.stringify({
          name: userName,
          email: userEmail,
          password: userPassword,
          password_confirmation: confrimUserPassword,
          }),
        // config
      );
  
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

 