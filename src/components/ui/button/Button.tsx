import React from 'react';
import styles from './Button.module.css';
import {ButtonProps} from "../../../types/uiTypes";

const Button = ({ label, onClick, type = 'button', disabled = false }:ButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
            {label}
        </button>)
}


export default Button;
