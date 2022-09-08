import PrescriptionListItem from '../PrescriptionListItem/PrescriptionListItem';

export default function PrescriptionList({ prescriptions, handleDelete }) {
    if (!prescriptions) return null;
    const prescriptionListItems = prescriptions.map(p =>
        <PrescriptionListItem
            prescription={p}
            key={p._id}
            handleDelete={handleDelete}
        />
    )
    return (
        <main>
            <h1>Prescription History</h1>
            {prescriptionListItems}
        </main>
    );
}