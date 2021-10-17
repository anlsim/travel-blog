import { useContext, useRef, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Contex";
import "./Login.scss";
import {Link} from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    console.log(emailRef.current.value)
    console.log(emailRef.current.value.toLowerCase())
    try {
      const res = await axios.post("/api/auth/login", {
        email: emailRef.current.value.toLowerCase(),
        password: passwordRef.current.value,
      });
      
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      console.log(err)

      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };
    return (
        <div className="loginDiv">
            <span className="formTitle">Login</span>
            {error && <span style={{color:"red", marginTop:"10px"}}>Sorry, there was a problem with your login.<br/> Please double-check your password or email.</span>}
            <form className="mainForm" onSubmit={handleLogin}>
                <input 
                    className="mainForm-input" 
                    type="email"
                    placeholder="Enter your email..."
                    ref={emailRef}
                />
                <input 
                    className="mainForm-input" 
                    type="password" 
                    placeholder="Enter your password..."
                    ref={passwordRef}
                    />
                <button className="mainForm-button" type="submit" disabled={isFetching}>Login</button>
            </form>
            <Link to="/resetPassword">Forgot Password?</Link>
            
        </div>
    )
}
