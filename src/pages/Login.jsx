import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.login(username, password);
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <p>
          Username
          <input placeholder="username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </p>
        <label htmlFor="Password">
          password
          <input placeholder="password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
