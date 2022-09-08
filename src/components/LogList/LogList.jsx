import LogListItem from '../LogListItem/LogListItem';

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
            <h1>Log History</h1>
            {logListItems}
        </main>
    );
}