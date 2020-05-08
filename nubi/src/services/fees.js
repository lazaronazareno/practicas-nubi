import api from './api';

export const fees = () => api.post('/fees/calculate_standard_fee/');
