import { FC, ReactChild, ReactFragment , ReactPortal } from 'react';
import style from './Container.module.css';


interface Icontainer {
    // children: JSX.Element | JSX.Element[];
    children : ReactChild | ReactFragment | ReactPortal;
    containerStyle?: string;
};

const Container: FC<Icontainer> = ({ children, containerStyle }) => {

  return (
    <div className={`${style.container} ${containerStyle}`}>
        {children}
    </div>
  )
};

export default Container;