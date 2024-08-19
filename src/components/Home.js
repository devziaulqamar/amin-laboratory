import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center text-gray-700">
          <h2 className="text-2xl font-semibold">You are not logged in!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-semibold mb-4">Welcome to Amin Laboratory, {user.username}!</h2>
      <p>This is the home page. Use the navigation above to manage patient records, reports, and test settings.</p>
    </div>
  );
};

export default Home;
