import { FC } from 'react';
import style from './Title.module.css';

interface Ititle {
    title: string;
    titleStyle?: string;
};

const Title: FC<Ititle> = ({ title, titleStyle }) => (
    <h3 className={`${style.title} ${titleStyle}`}>
        {title}
    </h3>
); 
  
export default Title;