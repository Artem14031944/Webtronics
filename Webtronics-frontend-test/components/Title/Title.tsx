import { FC } from 'react';
import style from './Title.module.css';

interface Ititle {
    title: string;
};

const Title: FC<Ititle> = ({ title }) => <h3 className={style.title}>{title}</h3>
  
export default Title;