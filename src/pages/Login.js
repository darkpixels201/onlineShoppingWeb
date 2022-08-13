import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { login } from '../actions/userAction'
import { useHistory } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';


function Login(location) {
    const history = useHistory();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";


  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;
  console.log("User Info", userInfo);

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
    {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
    <section id="login_area" className="ptb-100">
        <div className="container">
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="account_form">
                <h3>Login</h3>
                <form onSubmit={submitHandler}>
                    <div className="default-form-box">
                        <label>Username or email<span className="text-danger">*</span></label>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded" required />
                    </div>
                    <div className="default-form-box">
                        <label>Passwords<span className="text-danger">*</span></label>
                        <input 
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        
                        className="rounded" required />
                    </div>
                    <div className="login_submit">
                        <button className="theme-btn-one btn-black-overlay btn_md" type="submit">login</button>
                    </div>
                    <div className="remember_area">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="materialUnchecked"/>
                            <label className="form-check-label" htmlFor="materialUnchecked">Remember me</label>
                        </div>
                    </div>
                    <Link to="/signup" className="active">Create Your Account?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Login