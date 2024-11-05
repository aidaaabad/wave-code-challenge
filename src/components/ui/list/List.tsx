import React from 'react';
import styles from './List.module.css';
import { ListProps } from '../../../types/uiTypes';


const List = <T,>({ items, renderItem,className }: ListProps<T>) => {
    return (
        <ul className={`${styles.list} ${className || ''}`}>
            {items.map((item, index) => (
                <li key={index} className={styles.listItem}>
                    {renderItem(item, index)}
                </li>
            ))}
        </ul>
    );
};

export default List;
