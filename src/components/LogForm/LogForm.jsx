import { useState } from 'react';
import Select from 'react-select';
import './LogForm.css';

export default function LogForm({ handleAddLog, prescriptions, updateLogItem, updateLogStatus, setUpdateLogStatus, log }) {
  const [selectedPrescriptions, setSelectedPrescriptions] = useState([]);

  const [data, setData] = useState(
    log ? {
      vitals: log.vitals,
      date: new Date (log.date).toISOString().split("T")[0],
      meridiem: log.meridiem,
      notes: log.notes,
      prescriptions: [''],
    } : {
    vitals: '',
    date: '',
    meridiem: 'AM',
    notes: '',
    }
  );

  const options = prescriptions.map(p =>   
    ({ value: p._id , label: p.rxName })
  )

  function handleSubmit(evt) {
    evt.preventDefault();
    const pre = selectedPrescriptions.map(p => p.value)
    data.prescriptions = pre
    if (log) {
      updateLogItem(data, log._id)
      setUpdateLogStatus(!updateLogStatus);
    } else {
      handleAddLog(data);
    }
  }

  function handleChange(evt) {
    const newLogData = { ...data, [evt.target.name]: evt.target.value };
    newLogData.prescriptions = selectedPrescriptions;
    setData(newLogData);
  }

  return (
    <div>
    <h1 className="form-title">{log ? "Edit Log" : "New Log"}</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Vitals</label>
          <input
            onChange={handleChange} 
            name="vitals" 
            value={data.vitals} 
            placeholder="Weight, blood pressure, blood sugar, etc."
            />
          <label>Date</label>
          <input
            onChange={handleChange}
            type="date"
            name="date"
            required
            value={data.date}
            />
          <label>AM/PM</label>
          <select name="meridiem" required onChange={handleChange}>
            <option defaultValue value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          <label>Notes</label>
          <input
            onChange={handleChange}
            type="string"
            name="notes"
            value={data.notes}
            />
          <label>Prescriptions</label>
          <Select 
            isMulti
            name="prescriptions" 
            defaultValue={selectedPrescriptions} 
            onChange={setSelectedPrescriptions} 
            options={options} 
            />
          <button type="submit">{log ? "UPDATE LOG" : "ADD LOG"}</button>
        </form>
      </div>
    </div>
  );
}