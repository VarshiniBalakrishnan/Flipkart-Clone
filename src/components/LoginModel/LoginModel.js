import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import "./LoginModel.css";


const LoginModel = ({ isOpen, setIsOpen }) => {

  const [email, setemail] = useState("");
  
  const [password, setPassword] = useState("");
  
  const [loginType, setLoginType] = useState(true);

  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className='left'>
          <div className='left-container'>
            <p className='Login-title'>Login</p>
            <p className='Login-des'>
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className='right'>
          <input
          type="email"
          className="Login-input"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
          />
          <input
          type="password"
          className="Login-input"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <p className='termsandcon'>
            By continuing, you agree to Flipkart{" "}
            <span style={{color: "blue"}}>Terms of Use</span> and
            <span style={{color: "blue"}}>Privacy Policy</span>{" "}
          </p>
          
          
            
          {
            loginType ? (
              <button className='Login-btn'>Login</button>
            ) : (
              <button className='Login-btn'>Signup</button>

            )
          }
          {
            loginType ? (
              <p className="Login-signup" onClick={() => setLoginType(false)}>
                New to Flipkart? Create an account
              </p>
            ) : (
              <p className="Login-signup" onClick={() => setLoginType(true)}>
                Already an user? Login to an account
              </p>
            )
          }
        
              
        </div>
        <div className='close' onClick={()=>setIsOpen(false)}>
         <RxCross2 />
        </div>
      </div>

    </div>
  ) :(<></>) ;
  
};

export default LoginModel;
