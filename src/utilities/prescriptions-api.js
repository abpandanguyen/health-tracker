import sendRequest from './send-request';

const BASE_URL = '/api/prescriptions';

export function getAllForUser() {
    return sendRequest(BASE_URL);
}

export function postPrescription(prescriptionData) {
    return sendRequest(BASE_URL, 'POST', prescriptionData);
}

export function updatePrescription(prescriptionFormData, id) {
    return sendRequest(`${BASE_URL}/update/${id}`, "PUT", prescriptionFormData);
}

export function deletePrescription(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}