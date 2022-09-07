

export default function LogListItem({ prescription }) {
    return (
        <div>
            <div>Name: {prescription.name}</div>            
            <div>Class: {prescription.class}</div>
            <div>Dose: {prescription.dose}</div>
        </div>
    );
}