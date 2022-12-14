import PrescriptionListItem from '../PrescriptionListItem/PrescriptionListItem';
import "./PrescriptionList.css";

export default function PrescriptionList({ prescriptions, handleDelete, updatePrescriptionItem }) {
    if (!prescriptions) return null;
    const prescriptionListItems = prescriptions.map(p =>
        <PrescriptionListItem
            prescription={p}
            key={p._id}
            handleDelete={handleDelete}
            updatePrescriptionItem={updatePrescriptionItem}
        />
    )
    return (
        <main>
            <>
                <h1 className="list-title">Prescription History</h1>
            </>
            <div className="prescription-container">
                {prescriptionListItems}
            </div>
        </main>
    );
}