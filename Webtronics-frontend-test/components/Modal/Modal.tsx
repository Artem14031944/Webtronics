import { FC, SyntheticEvent } from 'react';
import Button from '../Button/Button';
import style from './Modal.module.css';

interface Imodal {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: string;
    text: string;
}

const Modal: FC<Imodal> = ({ open, setOpen, title, text }) => {
  return (
    <div 
        className={open ? style.modal_active : style.modal} 
        onClick={() => setOpen(false)}
    >
        <div 
            className={open ? style.modal_content_active : style.modal_content} 
            onClick={(e: SyntheticEvent) => e.stopPropagation()}
        >
            <h3 className={style.title}>{title}</h3>
            <p  className={style.text}>{text}</p>
            <Button 
                text={"Ок"}
                type='button'
                btnStyle={style.btn}
                onClick={() => setOpen(false)}
            />
        </div>
    </div>
  )
};

export default Modal;