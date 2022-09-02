import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { signup } from '../actions/userAction';
import Loader from '../components/Loader';
import Message from '../components/Message';

function Signup(location) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  console.log("Regiter Screen", userInfo);

  useEffect(() => {
    if (userInfo) {
        navigate.push(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      dispatch(signup(name, email, password, ));
    }
  };

  return (    
    <>
    <section id="login_area" className="ptb-100">
    <div className="container">
    {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                <div className="account_form">
                    <h3>Register</h3>
                    <form onSubmit={submitHandler}>
                        <div className="default-form-box">
                            <label>Username<span className="text-danger">*</span></label>
                            <input
                            type="text"
                            className="rounded"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="default-form-box">
                            <label>Email<span className="text-danger">*</span></label>
                            <input
                            type="email"
                            className="rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="default-form-box">
                            <label>Password<span className="text-danger">*</span></label>
                            <input
                            type="password"
                            className="rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="default-form-box">
                            <label>Confirm Password<span className="text-danger">*</span></label>
                            <input 
                            type="password"
                            className="rounded"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <div className="login_submit">
                            <button className="theme-btn-one btn-black-overlay btn_md" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}

export default Signup