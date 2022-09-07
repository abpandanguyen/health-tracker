import sendRequest from './send-request';

const BASE_URL = '/api/prescriptions';

export function postPrescription(prescriptionData) {
    return sendRequest(BASE_URL, 'POST', prescriptionData);
}
export function getAllForUser() {
    return sendRequest(BASE_URL);
}