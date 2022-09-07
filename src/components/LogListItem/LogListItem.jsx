

export default function LogListItem({ log }) {
    return (
        <div>
            <div>Date: {log.date}</div>            
            <div>Vitals: {log.vitals}</div>
            <div>Notes: {log.notes}</div>
        </div>
    );
}