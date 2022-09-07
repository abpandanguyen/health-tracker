import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrescriptionForm from '../../components/PrescriptionForm/PrescriptionForm';
import PrescriptionList from '../../components/PrescriptionList/PrescriptionList';
import * as prescriptionsAPI from '../../utilities/prescriptions-api';

export default function PrescriptionHistoryPage() {
  const [prescriptions, setPrescriptions] = useState([]);
  useEffect(function() {
    async function getPrescriptions() {
      const prescriptions = await prescriptionsAPI.getAllForUser();
      setPrescriptions(prescriptions);
    }
    getPrescriptions();
  }, []);

  async function handleAddPrescription(prescriptionData) {
    const prescription = await prescriptionsAPI.postPrescription(prescriptionData);
    setPrescriptions([...prescriptions, prescription]);
  }
    return (
      <main>
        <h1>Prescription Page</h1>
        <PrescriptionForm handleAddPrescription={handleAddPrescription} />
        <PrescriptionList
          prescriptions={prescriptions}
        />
    </main>
    );
  }