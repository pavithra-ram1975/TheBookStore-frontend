// import {useNavigate} from 'react-router-dom'
// const Login=()=>{

//     const navigate=useNavigate();
//     const handleLogin=()=>{
//         navigate('/Products')
//     }
//     return(
//         <>
//         <div className="Login-container">
//             <h3 className="Logintxt">Login</h3>
//             <input type="text" placeholder="Email" className="email"/><br></br>
//             <input type="text" placeholder="Password" className="password"/>
//             <button className="Login-button"onClick={handleLogin}>Login</button>

//         </div>
//         </>
//     )
// }
// export default Login;

import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
const navigate=useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleLogin=(e)=>{
  e.preventDefault();
  if (email === '' || password === '') {
    alert('Please fill the required fields.');
    return;
  }navigate('/Products')}
  
  return (
    <div className='auth-body'>
    <div className="auth-container">
      <div className="auth-box login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email}onChange={(e) => setEmail(e.target.value)}  />
          <input type="password" placeholder="Password"  value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          {/* <button className="Login-button"onClick={handleLogin}>Login</button> */}
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>

      <div className="auth-box register-box">
        <h2>Don't have an account?</h2>
        <p>Go ahead and create an account for yourself!</p>
        {/* <button>Register</button> */}
        <button onClick={() => navigate('/Register')}>Signup</button>
      </div>
    </div>
    </div>
  );
}

export default Login;
