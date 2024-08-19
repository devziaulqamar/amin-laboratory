import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientsContext } from '../context/PatientsContext';

const ViewRecords = () => {
  const { patients } = useContext(PatientsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRowClick = (patientId) => {
    navigate(`/patient/${patientId}`);
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">View Patient Records</h2>
          <button
            onClick={() => navigate('/add-patient')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Patient
          </button>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by patient name..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <tr
                    key={patient.id}
                    onClick={() => handleRowClick(patient.id)}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.testDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-center" colSpan="4">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewRecords;
