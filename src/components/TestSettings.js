import React, { useState } from 'react';

export default function TestSettings() {
  const [testName, setTestName] = useState('');
  const [normalRange, setNormalRange] = useState('');

  const handleTestNameChange = (e) => {
    setTestName(e.target.value);
  };

  const handleNormalRangeChange = (e) => {
    setNormalRange(e.target.value);
  };

  const handleSave = () => {
    // Save the test settings
    console.log('Test Name:', testName);
    console.log('Normal Range:', normalRange);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Test Settings</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Test Name</label>
          <input
            type="text"
            value={testName}
            onChange={handleTestNameChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Normal Range</label>
          <input
            type="text"
            value={normalRange}
            onChange={handleNormalRangeChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
