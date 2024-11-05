import React, { useState } from 'react';
import styles from './Form.module.css';
import Input from "../input/Input";
import Select from "../select/Select";
import {FormProps} from "../../../types/uiTypes";



const Form= ({ fields, initialValues = {}, onSubmit }:FormProps) => {
    const [values, setValues] = useState<{ [key: string]: string }>(initialValues);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        fields.forEach((field) => {
            if (field.required && !values[field.name]) {
                newErrors[field.name] = `${field.label} is required`;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(values);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {fields.map((field) => (
                <div key={field.name} className={styles.field}>
                    {field.type === 'select' ? (
                        <Select
                            readOnly={field.readOnly}
                            type={field.type}
                            name={field.name}
                            value={values[field.name] || ''}
                            onChange={handleChange}
                            label={field.label}
                            options={field.options || []}

                        />
                    ) : (
                        <Input
                            type={field.type}
                            label={field.label}
                            name={field.name}
                            value={values[field.name] || ''}
                            onChange={handleChange}
                            readOnly={field.readOnly}
                            required={field.required}
                            error={errors[field.name]}
                        />
                    )}

                </div>
            ))}
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
};

export default Form;
