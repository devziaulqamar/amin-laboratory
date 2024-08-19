import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ViewRecords from './components/ViewRecords';
import AddPatient from './components/AddPatient';
import PatientDetail from './components/PatientDetail';
import Reports from './components/Reports';  // Import the Reports component
import TestSettings from './components/TestSettings';  // Import the Test Settings component
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { PatientsProvider } from './context/PatientsContext';

function App() {
  return (
    <AuthProvider>
      <PatientsProvider>
        <Router>
          <Navbar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/view-records" element={<ViewRecords />} />
              <Route path="/add-patient" element={<AddPatient />} />
              <Route path="/patient/:id" element={<PatientDetail />} />
              <Route path="/reports" element={<Reports />} /> {/* Add route for Reports */}
              <Route path="/test-settings" element={<TestSettings />} /> {/* Add route for Test Settings */}
            </Routes>
          </div>
        </Router>
      </PatientsProvider>
    </AuthProvider>
  );
}

export default App;
