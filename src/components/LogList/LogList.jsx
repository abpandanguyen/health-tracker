import LogListItem from '../LogListItem/LogListItem';
import "./LogList.css";

export default function LogList({ logs, handleDelete, updateLogItem, prescriptions }) {
    if (!logs) return null;
    const logListItems = logs.map(l =>
        <LogListItem
            log={l}
            key={l._id}
            handleDelete={handleDelete}
            updateLogItem={updateLogItem}
            prescriptions={prescriptions}
        />
    )
    return (
        <main className="log-list">
            <h1 className='list-title'>Log History</h1>
            {logListItems}
        </main>
    );
}