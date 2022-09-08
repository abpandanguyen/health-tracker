

export default function LogListItem({ log, handleDelete }) {
    return (
        <div>
            <div>Date: {new Date(log.date).toLocaleDateString()}<span> {log.meridiem} </span></div>            
            <div>Vitals: {log.vitals}</div>
            <div>Notes: {log.notes}</div>
            <div>Prescription: {log.prescriptions.map(p => p.rxName).join(", ")} </div>
            <button onClick={() => handleDelete(log._id)}>X</button>
        </div>
    );
}