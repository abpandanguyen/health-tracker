import { useState, useEffect } from 'react';
import PrescriptionForm from '../../components/PrescriptionForm/PrescriptionForm';
import PrescriptionList from '../../components/PrescriptionList/PrescriptionList';
import * as prescriptionsAPI from '../../utilities/prescriptions-api';
import './PrescriptionPage.css'

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

  async function handleDelete(prescriptionEntry) {
    const prescription = await prescriptionsAPI.deletePrescription(prescriptionEntry);
    const updatedPrescriptions = prescriptions.filter((p) => p._id !== prescription._id)
    setPrescriptions(updatedPrescriptions);
  }

    return (
      <main>
        <h1 className="title">Prescription Page</h1>
        <PrescriptionForm handleAddPrescription={handleAddPrescription} />
        <PrescriptionList
          prescriptions={prescriptions}
          handleDelete={handleDelete}
        />
    </main>
    );
  }