import { FC, ReactChild, ReactFragment , ReactPortal } from 'react';
import style from './Wrapper.module.css';

interface Iwrapper {
    // children: JSX.Element | JSX.Element[];
    children : ReactChild | ReactFragment | ReactPortal;
    wrapperStyle?: string;
  };

const Wrapper: FC<Iwrapper> = ({ children, wrapperStyle }) => {
  return (
    <div className={`${style.wrapper} ${wrapperStyle}`}>
        {children}
    </div>
  )
}

export default Wrapper