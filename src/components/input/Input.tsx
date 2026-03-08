import type { FC, InputHTMLAttributes } from 'react';
type typeInput = "text" | "number" | "password";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: typeInput;
    placeholder?: string;
    value?: string | number;
}

const Input: FC<Props> = ({placeholder, type, value, ...props}) => {
    return (
        <>
            <input type={type || "text"} placeholder={placeholder || "Enter your name"} value={value} {...props} />
        </>
    )
}

export default Input;