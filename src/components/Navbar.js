import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Amin Laboratory</h1>
          <Link to="/home" className="hover:bg-blue-700 px-4 py-2 rounded">
            Home
          </Link>
          <Link to="/view-records" className="hover:bg-blue-700 px-4 py-2 rounded">
            View Patient Records
          </Link>
          <Link to="/reports" className="hover:bg-blue-700 px-4 py-2 rounded">
            Reports
          </Link>
          <Link to="/test-settings" className="hover:bg-blue-700 px-4 py-2 rounded">
            Test Settings
          </Link>
        </div>
        {user && (
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
