import { useState, useEffect } from 'react';
import LogForm from '../../components/LogForm/LogForm';
import LogList from '../../components/LogList/LogList';
import * as logsAPI from '../../utilities/logs-api';
import './LogPage.css';


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
    const logs = await logsAPI.postLog(logData);
    setLogs(logs);
  }

  async function updateLogItem(logItemData, id) {
    const updatedLogs = await logsAPI.updateLog(logItemData, id);
    setLogs(updatedLogs);
  }

  async function handleDelete(logEntry) {
    const log = await logsAPI.deleteLog(logEntry);
    const updatedLogs = logs.filter((l) => l._id !== log._id)
    setLogs(updatedLogs);
  }

  return (
    <main>
      <h1 className="title">Log Page</h1>
      <LogForm handleAddLog={handleAddLog} prescriptions={prescriptions} />
      <LogList
        logs={logs}
        handleDelete={handleDelete}
        updateLogItem={updateLogItem}
        prescriptions={prescriptions}
      />
    </main>
    
  );
}