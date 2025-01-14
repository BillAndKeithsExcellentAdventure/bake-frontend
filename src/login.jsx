// src/Login.js

/* Contents of User
        User => {
          fullName: profile.displayName,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
          googleId: profile.id,
        };
*/

import React, { useState, useEffect, useContext } from 'react';
import Host from './Host.jsx';
import UserContext from './UserContext';

const Login = () => {
  const { authUser, login, logout } = useContext(UserContext);

  // Access the API URL using import.meta.env
  const apiUrl = 'https://wgstodo.azurewebsites.net'; // import.meta.env.VITE_API_URL;

  const handleLogin = () => {
    // Redirect to backend's Google OAuth route
    window.location.href = `${apiUrl}/api/v1/auth/google`; //login route
  };

  useEffect(() => {
    // Check if the token is present in URL after redirection
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get('token');
    const emailFromURL = urlParams.get('email');
    const fullNameFromURL = urlParams.get('fullName');
    const userFromURL = { email: emailFromURL, fullName: fullNameFromURL };

    if (tokenFromURL) {
      login(userFromURL, tokenFromURL);
      window.history.replaceState(null, '', window.location.pathname); // Remove token from URL
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Clear session (this would typically involve a logout endpoint on the server)

      const response = await fetch(`${apiUrl}/api/v1/auth/logout`, {
        credentials: 'include',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        logout();
      } else {
        throw new Error('Logout failed');
      }
    } catch (err) {
      console.error('Logout error', err);
    }
  };
  // TODO: decide on authUser.email or authUser.email
  return (
    <div className="page-container">
      {!authUser ? (
        <div className="page-header">
          <h1>ToDo Login</h1>
          <button className="button-login" onClick={handleLogin}>
            Login with Google
          </button>
        </div>
      ) : (
        <>
          <div className="page-header">
            <h1>{authUser.email}</h1>
            <button className="button-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <Host />
        </>
      )}
    </div>
  );
};

export default Login;
