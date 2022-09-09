import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import LogPage from '../LogPage/LogPage';
import PrescriptionPage from '../PrescriptionPage/PrescriptionPage';
import UserPage from '../UserPage/UserPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import * as prescriptionsAPI from '../../utilities/prescriptions-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(function() {
    async function getPrescriptions() {
      const prescriptions = await prescriptionsAPI.getAllForUser();
      setPrescriptions(prescriptions);
    }
    getPrescriptions();
  }, [user]);


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/logs' element={<LogPage prescriptions={prescriptions} />} />
            <Route path='/prescriptions' element={<PrescriptionPage prescriptions={prescriptions} setPrescriptions={setPrescriptions} />} />
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
