import { Link } from 'react-router-dom';
import PrescriptionForm from '../../components/PrescriptionForm/PrescriptionForm';
import PrescriptionList from '../../components/PrescriptionList/PrescriptionList';
import * as prescriptionsAPI from '../../utilities/prescriptions-api';
import './PrescriptionPage.css'

export default function PrescriptionHistoryPage({ prescriptions, setPrescriptions }) {

  async function handleAddPrescription(prescriptionData) {
    const prescriptions = await prescriptionsAPI.postPrescription(prescriptionData);
    setPrescriptions(prescriptions);
  }

  async function updatePrescriptionItem(prescriptionItemData, id) {
    const updatedPrescriptions = await prescriptionsAPI.updatePrescription(prescriptionItemData, id);
    setPrescriptions(updatedPrescriptions);
  }

  async function handleDelete(prescriptionEntry) {
    const prescription = await prescriptionsAPI.deletePrescription(prescriptionEntry);
    const updatedPrescriptions = prescriptions.filter((p) => p._id !== prescription._id)
    setPrescriptions(updatedPrescriptions);
  }

    return (
      <main className="prescription-page">
        <h1 className="title">Prescription Page</h1>
        <PrescriptionForm handleAddPrescription={handleAddPrescription} />
        <Link to='/logs'><h2>Logs</h2></Link>
        <PrescriptionList
          prescriptions={prescriptions}
          handleDelete={handleDelete}
          updatePrescriptionItem={updatePrescriptionItem}
        />
    </main>
    );
  }