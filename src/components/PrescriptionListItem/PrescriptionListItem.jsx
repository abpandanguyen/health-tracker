// import './PrescriptionListItem.css';
import PrescriptionForm from '../PrescriptionForm/PrescriptionForm';
import { useState } from 'react';

export default function PrescriptionListItem({ prescription, handleDelete, updatePrescriptionItem }) {
    const [updatePrescriptionStatus, setUpdatePrescriptionStatus] = useState(false);

    return (
        <div className="PrescriptionListItem">
            {updatePrescriptionStatus ? <PrescriptionForm prescription={prescription} updatePrescriptionItem={updatePrescriptionItem} updatePrescriptionStatus={updatePrescriptionStatus} setUpdatePrescriptionStatus={setUpdatePrescriptionStatus} /> :
            <div>
                <button onClick={() => setUpdatePrescriptionStatus(!updatePrescriptionStatus)}>UPDATE</button>
                <div>Name: {prescription.rxName}</div>            
                <div>Class: {prescription.class}</div>
                <div>Dose: {prescription.dose}</div>
                <button onClick={() => handleDelete(prescription._id)}>X</button>
            </div>
            }           
        </div>
    );
}