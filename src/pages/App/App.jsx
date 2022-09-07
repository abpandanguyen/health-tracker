import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewLogPage from '../NewLogPage/NewLogPage';
import LogHistoryPage from '../LogHistoryPage/LogHistoryPage';
import NewPrescriptionPage from '../NewPrescriptionPage/NewPrescriptionPage';
import PrescriptionHistoryPage from '../PrescriptionHistoryPage/PrescriptionHistoryPage';
import UserPage from '../UserPage/UserPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import * as logsAPI from '../../utilities/logs-api';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/logs/new' element={<NewLogPage user={user} />} />
            <Route path='/logs' element={<LogHistoryPage user={user} />} />
            <Route path='/prescriptions' element={<PrescriptionHistoryPage user={user} />} />
            <Route path='/prescriptions/new' element={<NewPrescriptionPage user={user} />} />
            <Route path='/user' element={<UserPage />} user={user} />
            <Route path='/*' element={<Navigate to='/user' />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
