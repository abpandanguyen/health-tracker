import { useState } from 'react';

export default function PrescriptionForm({ user, setUser, handleAddPrescription }) {
  const [data, setData] = useState({
    rxName: '',
    class: '',
    dose: '',
  });

  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddPrescription(data);
    setData({
      rxName: '',
      class: '',
      dose: '',
    });
  }
  return (
    <div>
    <h1>New Prescription</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          onChange={handleChange} 
          type="string"
          name="rxName" 
          value={data.rxName} 
        />
        <label>Class</label>
        <input
          onChange={handleChange}
          type="string"
          name="class"
          value={data.class}
        />
        <label>Dose</label>
        <input
          onChange={handleChange}
          type="string"
          name="dose"
          value={data.dose}
        />
        <button type="submit">ADD PRESCRIPTION</button>
      </form>
    </div>
  );
}