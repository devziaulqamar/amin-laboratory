import React, { createContext, useState } from 'react';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'John Doe', age: 30, gender: 'Male', testDate: '2024-08-19' },
    { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', testDate: '2024-08-18' },
    { id: 3, name: 'Alice Johnson', age: 40, gender: 'Female', testDate: '2024-08-17' },
  ]);

  const addPatient = (newPatient) => {
    setPatients([...patients, { ...newPatient, id: patients.length + 1 }]);
  };

  return (
    <PatientsContext.Provider value={{ patients, addPatient }}>
      {children}
    </PatientsContext.Provider>
  );
};
