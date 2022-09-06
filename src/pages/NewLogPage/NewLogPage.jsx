import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as logsAPI from '../../utilities/logs-api';

export default function NewLogPage({ user, setUser, handleAddLog }) {
  const [content, setcontent] = useState({
    vitals: '',
    prescription: '',
    date: '',
    notes: '',
  });

  function handleSubmit(l) {
    l.preventDefault();
    handleAddLog(content);
  }

  return (
    <div>
    <h1>New Log</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={l => setcontent(l.target.value)}
        />
        <button type="submit">ADD LOG</button>
      </form>
    </div>
  );
}