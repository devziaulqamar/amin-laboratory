import React from 'react';
import { useParams } from 'react-router-dom';

const PatientDetail = () => {
  const { id } = useParams();

  // Sample data for a specific patient
  const patient = {
    id: id,
    name: 'John Doe',
    age: 30,
    gender: 'Male',
    testDate: '2024-08-19',
    // Add more patient details here...
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Patient Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p><strong>Name:</strong> {patient.name}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Test Date:</strong> {patient.testDate}</p>
          {/* Add more patient details here */}
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
