import sendRequest from './send-request';

const BASE_URL = '/api/logs';

export function postLog(logData) {
    return sendRequest(BASE_URL, 'POST', logData);
}

export function getAllForUser() {
    return sendRequest(BASE_URL);
}

export function deleteLog(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}