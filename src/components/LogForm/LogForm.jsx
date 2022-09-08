import { useState } from 'react';

export default function LogForm({ handleAddLog, prescriptions }) {
  const [selectedPrescriptions, setSelectedPrescriptions] = useState([]);
  const [data, setData] = useState({
    vitals: '',
    date: '',
    notes: '',
  });

  const options = prescriptions.map(function(p, idx) {
    return (
      <option key={idx} value={p._id}>{p.rxName}</option>
    );
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddLog(data);
  }

  function handleChange(evt) {
    if (evt.target.name === 'prescriptions') {
    selectedPrescriptions.push(prescriptions[parseInt(evt.target.value)]);
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
          placeholder="Weight, blood pressure, blood sugar, etc."
        />
        <label>Date and Time</label>
        <input
          onChange={handleChange}
          type="date"
          name="date"
          required
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