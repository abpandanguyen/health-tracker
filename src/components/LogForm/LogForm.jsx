import { useState } from 'react';

export default function LogForm({ user, setUser, handleAddLog, prescriptions }) {
  const [selectedPrescriptions, setSelectedPrescriptions] = useState([]);
  const [data, setData] = useState({
    vitals: '',
    date: '',
    notes: '',
  });

  const options = prescriptions.map(function(p, idx) {
    return (
      <option key={idx} value={idx}>{p.rxName}</option>
    );
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddLog(data);
  }

  function handleChange(evt) {
    if (evt.target.name === 'prescriptions') {
    selectedPrescriptions.push(parseInt(evt.target.value));
    }
    setSelectedPrescriptions(selectedPrescriptions)

    const newLogData = { ...data, [evt.target.name]: evt.target.value };
    newLogData.prescriptions = selectedPrescriptions;
    setData(newLogData);
  }

  return (
    <div>
    <h1>New Log</h1>
      <form onSubmit={handleSubmit}>
        <label>Vitals</label>
        <input 
          onChange={handleChange} 
          name="vitals" 
          value={data.vitals} 
        />
        {/* <label>Prescription</label>
        <input
          onChange={onChange}
          type="string"
          name="prescription"
          value={data.prescription}
        /> */}
        <label>Date</label>
        <input
          onChange={handleChange}
          type="datetime-local"
          name="date"
          value={data.date}
        />
        <label>Notes</label>
        <input
          onChange={handleChange}
          type="string"
          name="notes"
          value={data.notes}
        />
        <label>Prescriptions</label>
        <select multiple={true} name="prescriptions" value={data.prescriptions} onChange={handleChange}>
          {options}
        </select>
        <button type="submit">ADD LOG</button>
      </form>
    </div>
  );
}