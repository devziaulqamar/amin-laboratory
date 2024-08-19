import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (username, password) => {
    // Replace with real authentication logic
    const validUsername = 'admin'; // Example username
    const validPassword = 'password123'; // Example password

    if (username === validUsername && password === validPassword) {
      const userData = { username }; // Example user data
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true; // Credentials are correct
    } else {
      return false; // Credentials are incorrect
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

