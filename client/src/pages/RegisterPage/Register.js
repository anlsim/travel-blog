import {useState} from 'react';
import axios from "axios";
import * as emailjs from 'emailjs-com';
import './Register.scss';


export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e) => {
      e.preventDefault();
      setError(false);
      var updatedPassword = document.getElementById("password").value;
      var confirmPassword = document.getElementById("confirmPassword").value;
      if (updatedPassword !== confirmPassword) {
        setError(true);
        setErrorMessage("The passwords you entered don't match")
        return false;
      }
      else{
      try {
        const res = await axios.post("api/auth/register", {
          firstName,
          lastName,
          email,
          password,
        });
        console.log(res)
        res.data && setTimeout(() => { 
          window.location = "/login"
        }, 2000)
      } catch (err) {
        setError(true);
        setErrorMessage("Sorry, there was a problem with your Registration.")

      }
        emailjs.sendForm('gmail', 'template_test', e.target, 'userGoesHere')
        e.target.reset();
        setResult(true);
    }
    };
    

    return (
        <div className="registerDiv">
        {  result ? <>
        <h3>Thanks for registering, {firstName}! </h3>
        <h4>You can login now!</h4>
        </>
        :
        <>
        <span className="formTitle">Register</span>
        {error && <span style={{color:"red", marginTop:"10px"}}>{errorMessage}</span> }
        <form className="mainForm" onSubmit={handleRegister}>
             <input 
                 className="mainForm-input" 
                type="text" 
                placeholder="First Name"
                name="first_name"
                required
                onChange={e=>setFirstName(e.target.value)}
            />
            <input 
                 className="mainForm-input" 
                type="text" 
                placeholder="Last Name"
                name="last_name"
                required
                onChange={e=>setLastName(e.target.value)}
            />
            <input 
                className="mainForm-input" 
                type="email" 
                placeholder="Email Address"
                name="user_email"
                required
                onChange={e=>setEmail(e.target.value)}
            />
            <input 
                 className="mainForm-input" 
                type="password"
                placeholder="Password"
                id="password"
                required
                onChange={e=>setPassword(e.target.value)}
            />
            <input 
              className="mainForm-input" 
              type="password" 
              placeholder="Confirm Password" 
              id="confirmPassword"
            />
            <button className="mainForm-button" type="submit">Register</button>
        </form>

        </>
         }
       
        
    </div>
    )
}
