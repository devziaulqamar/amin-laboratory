import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientsContext } from '../context/PatientsContext';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [testDate, setTestDate] = useState('');
  const { addPatient } = useContext(PatientsContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = { name, age, gender, testDate };
    addPatient(newPatient);  // Add the patient using context
    navigate('/view-records');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Add New Patient</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Test Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
