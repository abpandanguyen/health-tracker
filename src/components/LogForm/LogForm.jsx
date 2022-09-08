import { useState } from 'react';
import Select from 'react-select';

export default function LogForm({ handleAddLog, prescriptions }) {
  const [selectedPrescriptions, setSelectedPrescriptions] = useState([]);
  const [data, setData] = useState({
    vitals: '',
    date: '',
    notes: '',
  });

  // const options = prescriptions.map(function(p, idx) {
  //   return (
  //     <option key={idx} value={p._id}>{p.rxName}</option>
  //   );
  // })

  const options = prescriptions.map(p =>   
    ({ value: p._id , label: p.rxName })
  )

  function handleSubmit(evt) {
    evt.preventDefault();
    const pre = selectedPrescriptions.map(p => p.value)
    console.log(pre);
    console.log(data);
    data.prescriptions = pre
    handleAddLog(data);
  }

  function handleChange(evt) {
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
        <Select 
          isMulti
          name="prescriptions" 
          defaultValue={selectedPrescriptions} 
          onChange={setSelectedPrescriptions} 
          options={options} 
        />
        <button type="submit">ADD LOG</button>
      </form>
    </div>
  );
}