import axios from 'axios';
import { Customer } from '../types/customer';

interface CustomerResponse {
    customers: Customer[];
}

export const getCustomers = async () => {
    const response = await axios.get<CustomerResponse>('https://waveaccounting.github.io/se-challenge-fe-customers/settings.json');
    return response.data;
};


