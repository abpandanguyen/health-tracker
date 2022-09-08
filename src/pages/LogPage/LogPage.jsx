import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogForm from '../../components/LogForm/LogForm';
import LogList from '../../components/LogList/LogList';
import * as logsAPI from '../../utilities/logs-api';


export default function LogHistoryPage({ prescriptions }) {
  const [logs, setLogs] = useState();
  useEffect(function() {
    async function getLogs() {
      const logs = await logsAPI.getAllForUser();
      setLogs(logs);
    }
    getLogs();
  }, []);

  async function handleAddLog(logData) {
    const log = await logsAPI.postLog(logData);
    setLogs([...logs, log]);
  }

  async function handleDelete(logEntry) {
    const log = await logsAPI.deleteLog(logEntry);
    const updatedLogs = logs.filter((l) => l._id !== log._id)
    setLogs(updatedLogs);
  }

  return (
    <main>
      <h1>Log Page</h1>
      <LogForm handleAddLog={handleAddLog} prescriptions={prescriptions} />
      <LogList
        logs={logs}
        handleDelete={handleDelete}
      />
    </main>
    
  );
}