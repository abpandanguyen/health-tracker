import { useState } from 'react';

export default function PrescriptionForm({ user, setUser, handleAddPrescription }) {
  const [data, setData] = useState({
    name: '',
    class: '',
    dose: '',
  });

  function onChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }
  function onSubmit(evt) {
    evt.preventDefault();
    handleAddPrescription(data);
    setData({
      name: '',
      class: '',
      dose: '',
    });
  }
  return (
    <div>
    <h1>New Prescription</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input 
          onChange={onChange} 
          type="string"
          name="name" 
          value={data.name} 
        />
        <label>Class</label>
        <input
          onChange={onChange}
          type="string"
          name="class"
          value={data.class}
        />
        <label>Dose</label>
        <input
          onChange={onChange}
          type="string"
          name="dose"
          value={data.dose}
        />
        <button type="submit">ADD PRESCRIPTION</button>
      </form>
    </div>
  );
}