import { FC } from 'react';
import style from './Link.module.css';


export interface Ilink {
    id?: number,
    text: string,
    path: string
}

const Link: FC<Ilink> = ({text, path }) => {
  return (
    <div className={style.link}>
        {text}
    </div>
  )
};

export default Link;