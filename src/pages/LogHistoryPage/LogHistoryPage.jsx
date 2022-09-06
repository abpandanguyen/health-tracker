import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as logsAPI from '../../utilities/logs-api';


export default function LogHistoryPage() {
  const [logs, setLogs] = useState([]);

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

  return (
    <>
      <h1>Log History</h1>
    </>
  );
}