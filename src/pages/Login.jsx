import React, { useState } from 'react';

function Login() {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
  
    const handleLogin = () => {
      // Check the ID and password here (using hardcoded values for example)
      const expectedUserId = 'user123';
      const expectedPassword = 'password123';
  
      if (userId === expectedUserId && password === expectedPassword) {
        setLoginMessage('Login successful!'); // Redirect to the next page or perform some action
      } else {
        setLoginMessage('Invalid ID or password.');
      }
    };
  return (
      <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{loginMessage}</p>
    </div>
  )
}

export default Login