import LogListItem from '../LogListItem/LogListItem';
import "./LogList.css";

export default function LogList({ logs, handleDelete }) {
    if (!logs) return null;
    const logListItems = logs.map(l =>
        <LogListItem
            log={l}
            key={l._id}
            handleDelete={handleDelete}
        />
    )
    return (
        <main>
            <h1 className='list-title'>Log History</h1>
            {logListItems}
        </main>
    );
}