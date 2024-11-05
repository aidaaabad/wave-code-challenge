import React from 'react';
import styles from './Input.module.css';
import {InputProps} from "../../../types/uiTypes";

const Input = ({
                   label,
                   name,
                   type = 'text',
                   placeholder,
                   value,
                   onChange,
                   error,
                   readOnly = false,
                   required = false
               }: InputProps) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>
                {label}{required && ' *'}
            </label>
            <input
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                readOnly={readOnly}
                aria-invalid={!!error}
                aria-describedby={error ? `${name}-error` : undefined}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default Input;
