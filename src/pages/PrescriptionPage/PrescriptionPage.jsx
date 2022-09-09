import { useState, useEffect } from 'react';
import PrescriptionForm from '../../components/PrescriptionForm/PrescriptionForm';
import PrescriptionList from '../../components/PrescriptionList/PrescriptionList';
import * as prescriptionsAPI from '../../utilities/prescriptions-api';
import './PrescriptionPage.css'

export default function PrescriptionHistoryPage({ prescriptions, setPrescriptions }) {

  async function handleAddPrescription(prescriptionData) {
    const prescriptions = await prescriptionsAPI.postPrescription(prescriptionData);
    setPrescriptions(prescriptions);
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