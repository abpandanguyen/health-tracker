import sendRequest from './send-request';

const BASE_URL = '/api/logs';

export function postLog(logData) {
    return sendRequest(`${BASE_URL}/log/post`, 'POST', logData);
}
export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}