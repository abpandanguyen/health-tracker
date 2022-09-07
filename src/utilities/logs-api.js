import sendRequest from './send-request';

const BASE_URL = '/api/logs';

export function postLog(logData) {
    return sendRequest(BASE_URL, 'POST', logData);
}
export function getAllForUser() {
    console.log('hells');
    return sendRequest(BASE_URL);
}