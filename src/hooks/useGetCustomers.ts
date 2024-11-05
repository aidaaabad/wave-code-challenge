import { useEffect, useState } from 'react';
import { getCustomers } from '../services/getCustomers';
import { Customer } from '../types/customer';

export const useGetCustomers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const data = await getCustomers();
                setCustomers(data.customers);
            } catch (err) {
                setError('Failed to load customers');
            } finally {
                setLoading(false);
            }
        };
        fetchCustomers();
    }, []);

    return { customers, loading, error };
};
