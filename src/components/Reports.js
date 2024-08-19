import React, { useState } from 'react';

export default function Reports() {
  const [selectedPatient, setSelectedPatient] = useState('');
  const patients = ['John Doe', 'Jane Smith', 'Alice Johnson']; // Sample patient data

  const handlePatientChange = (e) => {
    setSelectedPatient(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Generate Report</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Patient</label>
          <select
            value={selectedPatient}
            onChange={handlePatientChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a patient</option>
            {patients.map((patient, index) => (
              <option key={index} value={patient}>
                {patient}
              </option>
            ))}
          </select>
        </div>

        {selectedPatient && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Report for {selectedPatient}</h3>
            {/* This is where you would list the test results */}
            <p>Test results will be displayed here...</p>
            {/* You can add a button here to export the report as a PDF */}
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Export as PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
