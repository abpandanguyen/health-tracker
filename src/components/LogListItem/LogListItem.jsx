// import './LogListItem.css'
import { useState } from 'react'
import LogForm from '../LogForm/LogForm';

export default function LogListItem({ log, handleDelete, updateLogItem }) {
    const [updateLogStatus, setUpdateLogStatus] = useState(false);

    return (
        <div className="LogListItem">
            {updateLogStatus ? <LogForm log={log} updateLogItem={updateLogItem} updateLogStatus={updateLogStatus} setUpdateLogStatus={setUpdateLogStatus} /> :
            <div>
                <button onClick={() => setUpdateLogStatus(!updateLogStatus)}>Update</button>
                <div>Date: {new Date(log.date).toLocaleDateString()}<span> {log.meridiem} </span></div>            
                <div>Vitals: {log.vitals}</div>
                <div>Notes: {log.notes}</div>
                <div>Prescription: {log.prescriptions.map(p => p.rxName).join(", ")} </div>
                <button onClick={() => handleDelete(log._id)}>X</button>
            </div>
            }
        </div>
    );
}