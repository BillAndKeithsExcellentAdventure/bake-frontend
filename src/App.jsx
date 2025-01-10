// src/App.js

import React from 'react';
import './App.css';
import Login from './login.jsx';
import Todo from './Todo.jsx';
import { UserProvider } from './UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Login />
      </UserProvider>
    </>
  );
}

export default App;
