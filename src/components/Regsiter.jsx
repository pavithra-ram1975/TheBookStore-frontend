import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();
  const[name,setname]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMessage] = useState('');


  const handleRegister = async(e) => {
    e.preventDefault();
    console.log('Register button clicked');
    // if (email === '' || password === '' || confirmPassword === '') {
    //   alert('Please fill in all fields.');
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   alert('Passwords do not match.');
    //   return;
    // }

    try {
      const reg = await axios.post('https://thebookstore-c7kj.onrender.com/users/register', {name, email, password });
      console.log('Registration response:', reg);
      if(reg.data && reg.data.msg){
        setMessage(reg.data.msg);
        navigate('/');
    }
      else {
        setMessage("Unexpected response format");
      }


      const payload = {
       name:name,
        email: email,
        password: password,
        confirmPassword:confirmPassword
      };
      console.log(payload);

    } 
    catch (err) {
      setMessage(err.response?.data?.msg || "Registration failed ");
    }
  };
    
  return (
    <div className='auth-body'>
      <div className="auth-container">
        <div className="auth-box register-box">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>

          <input
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
        <div className="auth-box login-box">
          <h2>Already have an account?</h2>
          <p>Log in to access your account!</p>
          <button  className="login-button"onClick={() => navigate('/')}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
