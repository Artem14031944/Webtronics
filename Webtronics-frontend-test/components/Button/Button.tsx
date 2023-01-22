import { FC } from 'react';
import style from './Button.module.css';


interface Ibutton {
    type: 'button' | 'submit';
    text: string;
    onClick?: () => void;
    btnStyle?: string;
    disabled?: boolean;
};

const Button: FC<Ibutton> = ({ type, text, btnStyle, onClick, disabled }) => (
    <button 
        type={type}
        onClick={onClick} 
        className={`${ disabled ? style.disabled : style.button} ${btnStyle}`} 
        disabled={disabled}
    >
        {text}
    </button>
);

export default Button;