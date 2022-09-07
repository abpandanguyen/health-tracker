

export default function LogListItem({ prescription }) {
    return (
        <div>
            <div>Name: {prescription.rxName}</div>            
            <div>Class: {prescription.class}</div>
            <div>Dose: {prescription.dose}</div>
        </div>
    );
}