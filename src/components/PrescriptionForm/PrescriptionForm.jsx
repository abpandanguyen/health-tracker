import { useState } from 'react';
import './PrescriptionForm.css';

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
    <h1 className="form-title">New Prescription</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input 
            onChange={handleChange} 
            type="string"
            name="rxName" 
            value={data.rxName}
            placeholder="insulin, lisinopril(prinvil), atorvastatin(lipitor), etc" 
          />
          <label>Class</label>
          <input
            onChange={handleChange}
            type="string"
            name="class"
            value={data.class}
            placeholder="diuretics, beta-blockers, cannabinoids, etc."
          />
          <label>Dose</label>
          <input
            onChange={handleChange}
            type="string"
            name="dose"
            value={data.dose}
            placeholder="mg, mL, tablets, etc."
          />
          <button type="submit">ADD PRESCRIPTION</button>
        </form>
      </div>
    </div>
  );
}