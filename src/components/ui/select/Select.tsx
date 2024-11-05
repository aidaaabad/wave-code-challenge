import React from 'react';
import styles from '../input/Input.module.css';
import {SelectProps} from "../../../types/uiTypes";


const Select = ({
                                           label,
                                           name,
                                           value,
                                           onChange,
                                           options,
                                           error,
                                           required = false,
                                           readOnly = false,
                                       }:SelectProps) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>
                {label}{required && ' *'}
            </label>
            <select
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                name={name}
                value={value}
                onChange={onChange}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
                disabled={readOnly}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <span id={`${name}-error`} className={styles.error}>{error}</span>}
        </div>
    );
};

export default Select;
