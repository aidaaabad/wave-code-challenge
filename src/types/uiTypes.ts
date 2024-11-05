
export interface  ButtonProps  {
    label: string;
    onClick: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
};

export interface FormProps {
    fields: FormFeild[];
    initialValues?: { [key: string]: string };
    onSubmit: (values: { [key: string]: string }) => void;
}

export interface InputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    readOnly?: boolean;
    required?: boolean;
};

export interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    className?: string;
}


export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export interface SelectProps {
    label: string;
    type?: 'select';
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
    error?: string;
    required?: boolean;
    readOnly?: boolean;
}

export type FormFeild = InputProps | SelectProps;
