import React, { useState } from 'react';
import SessionController from '../networking/controllers/SessionController';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SessionController.register(username, password, email);
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <p>
          Username
          <input placeholder="username" type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </p>
        <p>
          Password
          <input placeholder="password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </p>
        <p>
          Email
          <input placeholder="email " type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
