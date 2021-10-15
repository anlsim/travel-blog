import {useState} from 'react';
import * as emailjs from 'emailjs-com';
import './Login.scss';

export default function Register() {

    const [error] = useState(false);
    const [result, setResult] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_test', e.target, 'userGoesHere')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset();
        setResult(true);

      };
    

    return (
        <div className="loginDiv">
    
        <span className="formTitle">Forgot Password?</span>
        
        <form className="mainForm" onSubmit={handleRegister}>

            <input 
                className="mainForm-input" 
                type="text" 
                placeholder="Full Name"
                name="full_name"
                required
            />
            <input 
                className="mainForm-input" 
                type="text" 
                placeholder="Email Address"
                name="user_email"
                required
            />
            <button className="mainForm-button" type="submit">Request New Password</button>
        </form>
        { result &&
        <>
        <h4>We'll send you a temporary password as soon as possible!</h4>
        <h4>It might take up to 24 hours to receive your new password...</h4>
        </> }
        {error && <span>Something went wrong!</span> }
       
        
    </div>
    )
}
