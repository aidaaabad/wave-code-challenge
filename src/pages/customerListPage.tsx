import React, {useState} from 'react';
import {useGetCustomers} from '../hooks/useGetCustomers';
import {Customer} from '../types/customer';
import List from '../components/ui/list/List';
import Button from "../components/ui/button/Button";
import Form from "../components/ui/form/Form";
import Modal from "../components/ui/modal/Modal";
import styles from "./customerListPage.module.css";
import {FormFeild} from '../types/uiTypes';


const CustomerListPage: React.FC = () => {
    const {customers, loading, error} = useGetCustomers();
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const fields: FormFeild[] = [
        {name: 'name', label: 'Name', type: 'text', required: true ,onChange:()=>{},value:''},
        {name: 'email', label: 'Email', type: 'email', required: true,onChange:()=>{},value:''},
        {
            name: 'channel',
            label: 'Channel',
            type: 'select',
            options: ['website', 'email', 'phone', 'word-of-mouth', 'other', 'unknown']
            ,onChange:()=>{},value:''
        },
        {name: 'address', label: 'Address', type: 'text',onChange:()=>{},value:''},
        {name: 'postal', label: 'Postal', type: 'text',onChange:()=>{},value:''},
        {name: 'city', label: 'City', type: 'text', readOnly: true,onChange:()=>{},value:''},
        {name: 'province', label: 'Province', type: 'text', readOnly: true,onChange:()=>{},value:''},
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;


    const handleEditCustomer = (customer: Customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleSave = (formData: { [key: string]: string }) => {
        console.log('Form Data:', formData);
        setIsModalOpen(false);
        setSelectedCustomer(null);
    };

    return (
        <div className="container">
            <h2>Customer List</h2>
            <List
                className={styles.customerList}
                items={customers}
                renderItem={(customer) => (
                    <div className={'flex flex-row justify-between align-center'}>

                        <div className={'flex flex-column align-start'}>
                            <strong>{customer.name}</strong>
                            <span>{customer.email}</span>
                        </div>
                        <Button label="Edit" onClick={() => handleEditCustomer(customer)}/>

                    </div>)}
            />


            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {selectedCustomer && (
                    <Form
                        fields={fields}
                        initialValues={selectedCustomer}
                        onSubmit={handleSave}
                    />
                )}
            </Modal>
        </div>
    )
};

export default CustomerListPage;
