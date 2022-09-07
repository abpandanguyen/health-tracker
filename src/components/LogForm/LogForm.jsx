import { useState, useEffect } from 'react';

export default function LogForm({ user, setUser, handleAddLog }) {
  const [data, setData] = useState({
    vitals: '',
    prescription: '',
    date: '',
    notes: '',
  });

  function onChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  function onSubmit(evt) {
    evt.preventDefault();
    handleAddLog(data);
    setData({
      vitals: '',
      prescription: '',
      date: '',
      notes: '',
    });
  }

  return (
    <div>
    <h1>New Log</h1>
      <form onSubmit={onSubmit}>
        <label>Vitals</label>
        <input 
          onChange={onChange} 
          name="vitals" 
          value={data.vitals} 
        />
        <label>Prescription</label>
        <input
          onChange={onChange}
          type="string"
          name="prescription"
          value={data.prescription}
        />
        <label>Date</label>
        <input
          onChange={onChange}
          type="datetime-local"
          name="date"
          value={data.date}
        />
        <label>Notes</label>
        <input
          onChange={onChange}
          type="string"
          name="notes"
          value={data.notes}
        />
        <button type="submit">ADD LOG</button>
      </form>
    </div>
  );
}