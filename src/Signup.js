// SignUp.js
import React, { useState } from 'react';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement signup logic here
    console.log('Signing up:', email, password);
    // Redirect to login after signup
    history.push('/login');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
