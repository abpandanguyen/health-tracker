

export default function LogListItem({ log }) {
    return (
        <div>
            <div>Date: {new Date(log.date).toLocaleDateString()}</div>            
            <div>Vitals: {log.vitals}</div>
            <div>Notes: {log.notes}</div>
            <div>Prescription: {log.prescriptions} </div>
        </div>
    );
}