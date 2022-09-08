import './PrescriptionListItem.css';

export default function LogListItem({ prescription, handleDelete }) {
    return (
        <div className="PrescriptionListItem">
            <div>Name: {prescription.rxName}</div>            
            <div>Class: {prescription.class}</div>
            <div>Dose: {prescription.dose}</div>
            <button onClick={() => handleDelete(prescription._id)}>X</button>
        </div>
    );
}