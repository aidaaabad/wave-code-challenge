import React from 'react';
import styles from './Modal.module.css';
import {ModalProps} from "../../../types/uiTypes";
const Modal= ({ isOpen, onClose, children }:ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} >
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>Edit Customer</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
                
                <div className={styles.modalBody}>
                    {children}
                </div>


            </div>
        </div>
    );
};

export default Modal;
